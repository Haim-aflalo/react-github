import GridLayout from './components/GridLayout';
import Header from './components/Header';
import GameInfos from './components/GameInfos';
import { GameProvider } from './context/GameProviders';
import './App.css';

function App() {
  return (
    <GameProvider>
      <Header />
      <GameInfos />
      <GridLayout />
    </GameProvider>
  );
}

export default App;
