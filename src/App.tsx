import AppRoutes from './routes/routes';
function App() {

  return (
    <div className="h-screen min-h-screen flex flex-col">
      <main className="relative p-2 flex-grow">
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
