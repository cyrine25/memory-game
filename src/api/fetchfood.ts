import { FoodItem } from '@/domain/food'

export const fetchFood = async (): Promise<ReadonlyArray<FoodItem>> => {
  const data = await fetch('data/food.json')
  const foodData: ReadonlyArray<FoodItem> = await data.json()
  return foodData.map((q: FoodItem) => ({
    id: q.id,
    name: q.name,
    img: q.img,
  }))
}
