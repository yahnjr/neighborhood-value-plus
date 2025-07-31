import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../services/auth-context';

interface LoginPanelProps {
    onClose: () => void;
    onLoginSuccess?: () => void;
}

const LoginPanel: React.FC<LoginPanelProps> = ({ onClose, onLoginSuccess }) => {
    const { user, userData, signIn, signOut } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await signIn(email, password);
            if (onLoginSuccess) onLoginSuccess();
        } catch (error: any) {
            console.error('[LoginPanel] Login error:', error);
            setError(error.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="header-panel login-panel">
            <div className="panel-header">
                <h3>{user ? 'User Profile' : 'Login'}</h3>
                <button className="close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>

            <div className="panel-content">
                {user ? (
                    <div className="user-info">
                        <h4>Welcome!</h4>
                        <p>Email: {userData?.email}</p>
                        <p>Role: {userData?.role}</p>
                        <button 
                            className="logout-btn"
                            onClick={async () => {
                                setLoading(true);
                                try {
                                    await signOut();
                                    onClose();
                                } catch (error) {
                                    console.error('Error signing out:', error);
                                    setError('Failed to sign out');
                                } finally {
                                    setLoading(false);
                                }
                            }}
                            disabled={loading}
                        >
                            {loading ? 'Signing out...' : 'Sign Out'}
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                required
                            />
                        </div>

                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}

                        <div className="form-actions">
                            <button 
                                type="submit" 
                                className="submit-btn"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginPanel;
