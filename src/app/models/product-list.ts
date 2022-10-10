export interface ProductList {
  title: string;
  price: number;
  imageUrl: string;
  category: string;
}
export interface Products {
  key: string | null;
  payload: ProductList;
}
