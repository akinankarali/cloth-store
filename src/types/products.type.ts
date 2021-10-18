export interface IProductsData {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    image: string
    rating: IRatingData
}

export interface IRatingData {
    rate: number,
    count: number
}