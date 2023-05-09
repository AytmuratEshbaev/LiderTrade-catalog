export type ICatalog = {
    sectionId: number;
    sectionName: string;
    sectionImg: string;
    products: IProduct[]
}[]

export interface IProduct {
    productId: number
    productName: string;
    productImg: string;
}