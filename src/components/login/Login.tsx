import { useNavigate } from 'react-router-dom';
import AppIcon from '../../assets/app-logo.svg';
import { useAuth } from '../../context/AuthContext';
import SocialLoginButtons from './SocialLoginButtons';
import { useEffect } from 'react';
import ROUTES from '../../constants/routes';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    window.location.href = import.meta.env.VITE_GOOGLE_OAUTH_URL;
  };

  const signInWithFacebook = async () => { };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.DASHBOARD);
    }
  }, [isAuthenticated, navigate]);

  return (
    <section className="flex items-center justify-center min-h-screen px-4 bg-deep-navy">
      <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <img src={AppIcon} alt="App Icon" className="w-16 h-16" />
          <h2 className="text-2xl font-semibold text-gray-100">Iniciar Sesión</h2>
          <SocialLoginButtons
            onGoogleLogin={signInWithGoogle}
            onFacebookLogin={signInWithFacebook}
          />
        </div>
      </div>
    </section>
  );
};

export default Login;