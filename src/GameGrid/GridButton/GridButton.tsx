import classNames from 'classnames'
import { useState } from 'react'
import './GridButton.scss'

import { FoodItem } from '@/domain/food'

type Props = {
  item: FoodItem
  key: number
}
const GridButton = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(true)

  const handleButtonClick = () => {
    setIsFlipped(!isFlipped)
  }
  const gridButtonClassnames = classNames('StyledGridButton', { flipped: isFlipped })
  return (
    <button className={gridButtonClassnames} onClick={handleButtonClick}>
      {!isFlipped ? <div className="foodItemImg">{props.item.img}</div> : <div className="foodItemFlipped"></div>}
    </button>
  )
}
export default GridButton
