import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [ProductService]
})
export class ShoppingCartComponent implements OnInit {

  productList = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [];
  totalPrice = 0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList.forEach(product => {
      this.totalPrice += product.price * product.count;
    });
  }

  increase(id) {
    let index = this.productList.findIndex(product => product.id === id);
    this.productList[index].count++;
    localStorage.setItem('cartList', JSON.stringify(this.productList));
    window.location.reload();
  }

  decrease(id) {
    let index = this.productList.findIndex(product => product.id === id);
    this.productList[index].count--;
    localStorage.setItem('cartList', JSON.stringify(this.productList));
    window.location.reload();
  }

  removeProduct(id) {
    this.productService.setCartList(id, 'delete');
  }

}
