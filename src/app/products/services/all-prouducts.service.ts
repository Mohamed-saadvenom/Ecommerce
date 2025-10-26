import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllProuductsService {
  constructor(private http: HttpClient) {}
  getallProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getallcategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getproductsByCategory(category: string) {
    return this.http.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }
  getsingleproduct(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
