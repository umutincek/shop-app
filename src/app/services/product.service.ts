import { Category } from './../category/Category';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/Product';
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';
  cartList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [];

  setCartList(product, result) {
    if(result === 'add') {
      this.cartList.push({...product, count: 1});
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
    } else if(result === 'delete') {
      this.cartList = this.cartList.filter(item => item.id !== product);
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
    } else {
      let index = this.cartList.findIndex(item => item.id === product);
      return index !== -1 ? true : false;
    }
    window.location.reload();
  }

  getProducts(categoryId): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath += '?categoryId=' + categoryId;
    }
    return this.http.get<Product[]>(newPath);
  }
  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token',
      }),
    };
    return this.http.post<Product>(this.path, product, httpOptions);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }
}
