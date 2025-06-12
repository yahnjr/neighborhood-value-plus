import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { UserRole, UserData } from '../components/LoginPanel';

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  isAnonymous: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  loading: true,
  isAnonymous: true,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      setIsAnonymous(firebaseUser?.isAnonymous || true);

      if (firebaseUser && !firebaseUser.isAnonymous) {
        // Fetch user role from Firestore for signed-in users
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        const role = userDoc.exists() ? (userDoc.data().role as UserRole) : 'User';
        setUserData({
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          role,
          displayName: firebaseUser.displayName || undefined,
        });
      } else {
        // For anonymous users or no user, clear specific user data
        setUserData(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    await firebaseSignOut(auth);
    setUser(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, isAnonymous, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};