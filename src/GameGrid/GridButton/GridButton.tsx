import classNames from 'classnames'
import { useContext, useEffect, useState } from 'react'
import './GridButton.scss'

import { GameContext } from '../../GameContext/GameContext'

import { FoodItem } from '@/domain/food'

type Props = {
  item: FoodItem
  key: number
}
const GridButton = (props: Props) => {
  const GameContextData = useContext(GameContext)
  const [isFlipped, setIsFlipped] = useState(true)

  const handleButtonClick = () => {
    if (!isFlipped) {
      setIsFlipped(true)
      GameContextData.addMove({ id: props.item.id, name: props.item.name })
    }
  }
  useEffect(() => {
    if (GameContextData.prevMoves.includes(props.item.id)) {
      setIsFlipped(true)
    }
  }, [GameContextData.prevMoves, props.item])

  useEffect(() => {
    if (GameContextData.matched.includes(props.item.id)) {
      setIsFlipped(true)
    } else {
      setTimeout(() => {
        setIsFlipped(false)
      }, 500)
    }
  }, [GameContextData.matched, props.item.id])

  const gridButtonClassnames = classNames('StyledGridButton', { flipped: !isFlipped })
  return (
    <button className={gridButtonClassnames} onClick={handleButtonClick}>
      {isFlipped ? <div className="foodItemImg">{props.item.img}</div> : <div className="foodItemFlipped"></div>}
    </button>
  )
}
export default GridButton
