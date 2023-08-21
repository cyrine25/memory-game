import { useContext } from 'react'

import { GameContext } from '../GameContext/GameContext'

import ResultModal from './ResultModal/ResultModal'

export const GameResult = () => {
  const GameContextData = useContext(GameContext)
  const ResetGame = () => {
    setTimeout(() => {
      GameContextData.resetGame()
    }, 200)
  }
  return <>{GameContextData.isGameOver ? <ResultModal ResetGame={ResetGame} /> : null}</>
}
