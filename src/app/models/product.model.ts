export interface IProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  category: ICategosy,
  image: string,
  rating: IRating
}
export enum ICategosy {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing"
}

export interface IRating {
  rate: number,
  count: number
}