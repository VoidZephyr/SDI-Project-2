import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharacterList from './characters.js';
import EpisodeList from './episodes.js';
import LocationList from './locations.js';

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