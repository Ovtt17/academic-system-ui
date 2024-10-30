import AppRoutes from './routes/routes';
import Navigation from './components/navigation/Navigation';
function App() {

  return (
    <div className="h-screen min-h-screen flex flex-col">
      <Navigation />
      <section className="relative flex-grow">
        <AppRoutes />
      </section>
    </div>
  )
}

export default App
