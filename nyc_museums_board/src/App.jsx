import './App.css';
import MuseumList from './components/MuseumList';
import {museums} from './museums';
import artCartoon from './assets/art_cartoon.jpg';

function App() {
  return (
    <div>
      <img className="banner_image" src={artCartoon} alt="art gallery cartoon"/>
      <h1>NYC Art Galleries</h1>
      <h3>Your guide to the city's best museums 🎨</h3>
      <MuseumList museums={museums} />
    </div>
  );
}

export default App;