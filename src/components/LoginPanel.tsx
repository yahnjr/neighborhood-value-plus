import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../services/auth-context';
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase'; 

export type UserRole = 'User' | 'Admin';

export interface UserData {
    uid: string;
    email: string;
    role: UserRole;
    displayName?: string;
}

interface LoginPanelProps {
    onClose: () => void;
    onLoginSuccess?: () => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ onClose, onLoginSuccess }) => {
    const { user, userData, isAnonymous, signOut } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [selectedRole, setSelectedRole] = useState<UserRole>('User');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const auth = getAuth();

    // Function to get user role from Firestore
    const getUserRole = async (uid: string): Promise<UserRole> => {
        try {
            const userDoc = await getDoc(doc(db, 'users', uid));
            if (userDoc.exists()) {
                return userDoc.data().role || 'User';
            }
            return 'User'; // Default role
        } catch (error) {
            console.error('Error fetching user role:', error);
            return 'User'; // Default role on error
        }
    };

    // Function to save user data to Firestore
    const saveUserData = async (uid: string, email: string, role: UserRole) => {
        try {
            await setDoc(doc(db, 'users', uid), {
                email,
                role,
                createdAt: new Date(),
                lastLogin: new Date()
            });
        } catch (error) {
            console.error('Error saving user data:', error);
            throw error;
        }
    };

    // Handle login
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login handler called');
        setLoading(true);
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Get user role from Firestore
            const role = await getUserRole(user.uid);
            
            // Update last login
            await setDoc(doc(db, 'users', user.uid), {
                lastLogin: new Date()
            }, { merge: true });

            const userData: UserData = {
                uid: user.uid,
                email: user.email!,
                role,
                displayName: user.displayName || undefined
            };

            if (onLoginSuccess) onLoginSuccess();
        } catch (error: any) {
            setError(error.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    // Handle registration
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register handler called');
        setLoading(true);
        setError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // Save user data with selected role
            await saveUserData(user.uid, user.email!, selectedRole);

            const userData: UserData = {
                uid: user.uid,
                email: user.email!,
                role: selectedRole,
                displayName: user.displayName || undefined
            };

            if (onLoginSuccess) onLoginSuccess();
            // Do not close panel here
        } catch (error: any) {
            setError(error.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await signOut();
        if (onClose) {
            onClose();
        }
    };

    if (user) {
        // You can still use userData for role display, but fall back to user data if needed
        const displayEmail = userData?.email || user.email;
        const displayRole = userData?.role || 'User'; // Default role if not yet loaded
        
        return (
            <div className="header-panel login-panel">
                <div className="panel-header">
                    <h3>User Profile</h3>
                    <button className="close-btn" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <div className="panel-content">
                    <div className="user-info-display">
                        <p><strong>Email:</strong> {displayEmail}</p>
                        <p><strong>Role:</strong> {displayRole}</p>
                        <button onClick={handleLogout} className="logout-btn">Sign Out</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="header-panel login-panel">
            <div className="panel-header">
                <h3>{isRegistering ? 'User Registration' : 'User Login'}</h3>
                <button className="close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="panel-content">
                <form className="login-form" onSubmit={isRegistering ? handleRegister : handleLogin}>
                    {error && <div className="error-message">{error}</div>}
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="form-input"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="form-input"
                            required
                        />
                    </div>

                    {/* Role selection only shows during registration */}
                    {isRegistering && (
                        <div className="form-group">
                            <label htmlFor="role">User Role</label>
                            <select
                                id="role"
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                                className="form-input"
                            >
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    )}
                    
                    <div className="form-actions">
                        <button 
                            type="submit" 
                            className="login-btn"
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : (isRegistering ? 'Register' : 'Login')}
                        </button>
                        <button 
                            type="button"
                            className="register-btn"
                            onClick={() => {
                                setIsRegistering(!isRegistering);
                                setError('');
                            }}
                        >
                            {isRegistering ? 'Back to Login' : 'Register'}
                        </button>
                    </div>
                    
                    {!isRegistering && (
                        <div className="form-links">
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default LoginPanel;