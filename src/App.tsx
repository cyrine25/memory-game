import GameContextProvider from './GameContext/GameContextProvider'
import GameGrid from './GameGrid/GameGrid'
import { GameResult } from './GameResult/GameResult'

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <GameResult />
        <GameGrid />
      </GameContextProvider>
    </div>
  )
}

export default App
