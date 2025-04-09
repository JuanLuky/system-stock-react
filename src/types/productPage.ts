import type { Product } from "./product";

export interface ProductPage {
  product: Product[];
  totalElements: number;
  totalPages: number;
}
