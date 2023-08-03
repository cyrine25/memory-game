import { ReactNode, useEffect, useState } from 'react'

import { fetchFood } from '../api/fetchfood'

import { GameContext } from './GameContext'

import { FoodItem, GameData } from '@/domain/food'

type Props = {
  children: ReactNode
}

const GameContextProvider = (props: Props) => {
  const [shuffledItems, setShuffledItems] = useState<ReadonlyArray<FoodItem>>([])

  useEffect(() => {
    const fetchFoodResult = async () => {
      const response: ReadonlyArray<FoodItem> = await fetchFood()
      const foods = [...response, ...response]
      const incrementFoodsResult = foods.map((item, index) => ({
        ...item,
        id: index >= response.length ? item.id + 25 : item.id,
      }))
      const result: ReadonlyArray<FoodItem> = incrementFoodsResult.sort(() => Math.random() - 0.75)
      setShuffledItems(result)
    }
    fetchFoodResult()
  }, [])

  const GameContextData: GameData = {
    foodData: shuffledItems,
  }

  return <GameContext.Provider value={GameContextData}>{props.children}</GameContext.Provider>
}
export default GameContextProvider
