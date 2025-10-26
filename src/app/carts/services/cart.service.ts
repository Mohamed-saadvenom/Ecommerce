import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  createnewcart(model: any) {
    return this.http.post('https://fakestoreapi.com/Carts', model
    );
  }
  getallcarts(param?: any) {
    let params = new HttpParams();
    params = params
      .append('startDate', param?.start)
      .append('endDate', param?.end);
    return this.http.get('https://fakestoreapi.com/carts', { params });
  }
  deletecart(id: number) {
return this.http.delete(`https://fakestoreapi.com/carts/${id}`);
}
}
