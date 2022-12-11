import logo from './logo.svg';
import './App.css';
import AnimeCard from './shared/animecard/AnimeCard';
import MainChat from './modules/MainChat/MainChat';

function App() {
  return (
    <div className="App">
      <MainChat>

      </MainChat>
      {/* <div className="animeCardGrid">
        <AnimeCard />
      </div> */}
    </div>
  );
}

export default App;
