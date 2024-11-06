import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharacterList from './characters.jsx';
import CharacterDetail from './CharacterDetail.jsx';
import EpisodeList from './episodes.jsx';
import LocationList from './locations.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="home">
        <header className="home-header">
          <h1>Rick and Morty Universe</h1>
          <p>Discover characters, episodes, and locations in the multiverse!</p>
        </header>

        <nav>
          <Link to="/characters" className="navCard">
            <h2>Characters</h2>
            <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt="Character" />
          </Link>

          <Link to="/episodes" className="navCard">
            <h2>Episodes</h2>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Episode" />
          </Link>

          <Link to="/locations" className="navCard">
            <h2>Locations</h2>
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Location" />
          </Link>
        </nav>

        <Routes>
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterDetail />} /> {/* Dynamic route */}
          <Route path="/episodes" element={<EpisodeList />} />
          <Route path="/locations" element={<LocationList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
