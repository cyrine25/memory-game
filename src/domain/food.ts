export interface FoodItem {
  id: number
  name: string
  img: string
}
export interface GameData {
  foodData: readonly FoodItem[]
}
