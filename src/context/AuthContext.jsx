import { createContext, useContext, useState, useEffect } from 'react';
import { STORAGE_KEYS, CREDENTIALS } from '../constants';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check session storage on initialization
    return sessionStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN) === 'true';
  });

  const login = (username, password) => {
    // Simple static authentication
    if (username === CREDENTIALS.USERNAME && password === CREDENTIALS.PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(STORAGE_KEYS.IS_LOGGED_IN, 'true');
      sessionStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify({ username }));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(STORAGE_KEYS.IS_LOGGED_IN);
    sessionStorage.removeItem(STORAGE_KEYS.USER_DATA);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
