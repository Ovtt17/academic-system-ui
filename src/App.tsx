import AppRoutes from './routes/routes';
import { AuthProvider } from './context/AuthContext';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  return (
    <AuthProvider>
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </AuthProvider>
  );
}

export default App;