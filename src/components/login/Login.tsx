import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AppIcon from '../../assets/app-logo.svg';
import LoginForm from './LoginForm';
import OrSeparator from './OrSeparator';
import SocialLoginButtons from './SocialLoginButtons';

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signInWithGoogle = async () => { 
    const GOOGLE_URL = import.meta.env.VITE_GOOGLE_OAUTH_URL;
    window.location.href = GOOGLE_URL;
  };
  const signInWithFacebook = async () => { };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // const formData = new FormData(event.currentTarget);
    // const usernameOrEmail = formData.get('email') as string;
    // const password = formData.get('password') as string;

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2500);
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      if (passwordRef.current) {
        passwordRef.current.value = '';
        passwordRef.current.focus();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordChange = () => setErrorMessage('');

  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className={`w-full flex justify-center max-w-lg p-6 sm:p-8 bg-white rounded-md shadow-md transition-opacity duration-300 ${isLoading || isSuccess ? 'opacity-10' : ''}`}>
        <article className="flex flex-col gap-4 w-full max-w-sm">
          <img src={AppIcon} alt="App Icon" className="w-12 h-12" />
          <h2 className="text-start text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar Sesión
          </h2>
          <LoginForm
            handleSubmit={handleSubmit}
            passwordRef={passwordRef}
            errorMessage={errorMessage}
            handlePasswordChange={handlePasswordChange}
            isLoading={isLoading}
          />
          <OrSeparator />
          <SocialLoginButtons
            onGoogleLogin={signInWithGoogle}
            onFacebookLogin={signInWithFacebook}
          />
        </article>
      </div>
      {(isLoading || isSuccess) && (
        <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
          {isLoading && (
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-midnight-black"></div>
          )}
          {isSuccess && (
            <div className='flex flex-col items-center'>
              Bienvenido
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Login;