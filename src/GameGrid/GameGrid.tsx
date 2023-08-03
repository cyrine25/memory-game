import { useContext } from 'react'

import { GameContext } from '../GameContext/GameContext'

import GridButton from './GridButton/GridButton'
import './GameGrid.scss'
const GameGrid = () => {
  const GameContextData = useContext(GameContext)

  return (
    <>
      <div className="gameGrid">
        {GameContextData.foodData.map(item => (
          <GridButton item={item} key={item.id} />
        ))}
      </div>
    </>
  )
}
export default GameGrid
