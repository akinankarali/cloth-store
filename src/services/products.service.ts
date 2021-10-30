import http from "../http-common";
import { IProductsData } from "../types/products.type"

class ProductsDataService {
  getAll() {
    return http.get<IProductsData[]>("/products");
  }

  get(id: number) {
    return http.get<IProductsData[]>(`/products/${id}`);
  }

  getAllCategories() {
    return http.get<[]>("products/categories");
  }
  getSpesificCategory(category: string) {
    return http.get<[]>(`products/category/${category}`);
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