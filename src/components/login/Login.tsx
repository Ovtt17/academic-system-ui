import AppIcon from '../../assets/app-logo.svg';
import SocialLoginButtons from './SocialLoginButtons';

const Login = () => {

  const signInWithGoogle = async () => {
    window.location.href = import.meta.env.VITE_GOOGLE_OAUTH_URL;
  };

  const signInWithFacebook = async () => { };

  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className='w-full flex justify-center max-w-lg p-6 sm:p-8 bg-white rounded-md shadow-md transition-opacity duration-300'>
        <article className="flex flex-col gap-4 w-full max-w-sm">
          <img src={AppIcon} alt="App Icon" className="w-12 h-12" />
          <h2 className="text-start text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar Sesión
          </h2>
          <SocialLoginButtons
            onGoogleLogin={signInWithGoogle}
            onFacebookLogin={signInWithFacebook}
          />
        </article>
      </div>
    </section>
  );
};

export default Login;