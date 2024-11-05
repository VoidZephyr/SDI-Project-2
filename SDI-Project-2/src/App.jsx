import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharacterList from './Features/Characters/characters.js';
import EpisodeList from './Features/Episodes/episodes.js';
import LocationList from './Features/Locations/locations.js';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/characters">Characters</Link>
        <Link to="/episodes">Episodes</Link>
        <Link to="/locations">Locations</Link>
      </nav>
      <Routes>
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/episodes" element={<EpisodeList />} />
        <Route path="/locations" element={<LocationList />} />
      </Routes>
    </Router>
  );
}

export default App;