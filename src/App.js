import './App.css';
import Header from './components/Header/Header';
import Location from './components/Location/Location';
import Map from './components/Map/Map';
import { LocationProvider } from './context/LocationContext';

function App() {
  return (
    <LocationProvider>
    <div className="App">
        <Header />
        <Location />
        <Map />
    </div>
    </LocationProvider>
  );
}

export default App;
