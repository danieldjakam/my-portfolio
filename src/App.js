import './App.css';
import ThemeToggleButton from './components/global/ThemeToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-
      header">
        <div className="bg-primary-light dark:bg-primary-dark text-white p-4">
          <h1 className="text-4xl font-bold">Hello, Tailwind CSS!</h1>

        </div>
        <ThemeToggleButton/>
      </header>
    </div>
  );
}

export default App;
