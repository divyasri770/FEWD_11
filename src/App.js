import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import Home from './components/Home'; // ✅ Make sure you have this file

function App() {
  return (
    <div className="App">
         <Home />
      <Weather />
   
    </div>
  );
}

export default App;
