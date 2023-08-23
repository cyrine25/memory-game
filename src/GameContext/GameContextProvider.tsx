import { ReactNode, useEffect, useState } from 'react'

import { fetchFood } from '../api/fetchfood'

import { GameContext } from './GameContext'

import { FoodItem, GameTotalState, Move } from '@/domain/food'

type Props = {
  children: ReactNode
}
const initialGameState = {
  foodData: [],
  moves: [],
  prevMoves: [],
  matched: [],
  isGameOver: false,
  moveCount: 0,
}
const GameContextProvider = (props: Props) => {
  const [gameContextData, setGameContextData] = useState<GameTotalState>(initialGameState)

  const shaffuleData = (data: ReadonlyArray<FoodItem>) => {
    const foods = [...data, ...data]
    const incrementFoodsResult = foods.map((item, index) => ({
      ...item,
      id: index >= data.length ? item.id + 25 : item.id,
    }))
    const result: ReadonlyArray<FoodItem> = incrementFoodsResult.sort(() => Math.random() - 0.75)
    setGameContextData(prevState => ({
      ...prevState,
      foodData: result,
    }))
  }

  const addMove = (newMove: Move) => {
    if (gameContextData.moves.length < 2) {
      setGameContextData(prevState => ({
        ...prevState,
        prevMoves: [],
        moves: [...prevState.moves, newMove],
        moveCount: prevState.moveCount + 1,
      }))
    }
  }

  const checkMoves = () => {
    const [firstMove, secondMove] = gameContextData.moves
    if (firstMove.name === secondMove.name) {
      setGameContextData(prevState => ({
        ...prevState,
        matched: [...prevState.matched, firstMove.id, secondMove.id],
        prevMoves: [],
        moves: [],
      }))
    } else {
      setGameContextData(prevState => ({
        ...prevState,
        prevMoves: [firstMove.id, secondMove.id],
        matched: [...prevState.matched],
        moves: [],
      }))
    }
  }

  useEffect(() => {
    const fetchFoodResult = async () => {
      const response: ReadonlyArray<FoodItem> = await fetchFood()
      shaffuleData(response)
    }
    fetchFoodResult()
  }, [])

  if (gameContextData.moves.length === 2) {
    checkMoves()
  }
  useEffect(() => {
    if (gameContextData.foodData.length !== 0 && gameContextData.matched.length === gameContextData.foodData.length) {
      setGameContextData(prevState => ({
        ...prevState,
        isGameOver: true,
      }))
    }
  }, [gameContextData.matched, gameContextData.foodData])
  const resetGame = () => {
    setGameContextData({
      foodData: gameContextData.foodData,
      moves: [],
      prevMoves: [],
      matched: [],
      isGameOver: false,
      moveCount: 0,
    })
  }
  const providerData = { ...gameContextData, addMove: addMove, resetGame: resetGame }

  return <GameContext.Provider value={providerData}>{props.children}</GameContext.Provider>
}
export default GameContextProvider
