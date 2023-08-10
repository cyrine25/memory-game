export interface FoodItem {
  id: number
  name: string
  img: string
}
export interface Move {
  id: number
  name: string
}
export interface GameTotalState {
  foodData: readonly FoodItem[]
  moves: readonly Move[]
  prevMoves: number[]
  matched: number[]
  isGameOver: boolean
  moveCount: number
}
export interface GameContextState {
  foodData: readonly FoodItem[]
  moves: readonly Move[]
  prevMoves: number[]
  matched: number[]
  isGameOver: boolean
  moveCount: number
  addMove: (newMove: Move) => void
}
