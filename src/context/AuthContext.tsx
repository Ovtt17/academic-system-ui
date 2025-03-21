/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../constants/routes';
import User from '../types/user';
import { getCurrentUser } from '../services/authService';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = (user: User) => {
    setUser(user);
    setIsAuthenticated(true);
    navigate(ROUTES.HOME);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    navigate(ROUTES.LOGIN);
  };

  useEffect(() => {
    const getUserLoggedIn = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          setUser(user);
          setIsAuthenticated(true);
        }
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };
    getUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};