import './App.css';
import Header from './components/Header/Header';
import Location from './components/Location/Location';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Location />
        <Map />
      </main>
    </div>
  );
}

export default App;
