import http from "../http-common";
import { IProductsData } from "../types/products.type"

class ProductsDataService {
  getAll() {
    return http.get<IProductsData[]>("/products");
  }

  get(id: number) {
    return http.get<IProductsData[]>(`/products/${id}`);
  }

  create(data: IProductsData) {
    return http.post("/products", data);
  }

  update(data: IProductsData, id: any) {
    return http.put(`/products/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/products/${id}`);
  }
}

export default new ProductsDataService();