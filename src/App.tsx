import GameContextProvider from './GameContext/GameContextProvider'
import GameGrid from './GameGrid/GameGrid'

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <GameGrid />
      </GameContextProvider>
    </div>
  )
}

export default App
