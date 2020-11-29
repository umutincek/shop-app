import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  title: String = 'Ürün Listesi';
  filterText = '';
  products: Product[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe((data) => {
        this.products = data;
      });
    });
  }
  addToCart(product) {
    this.productService.setCartList(product, 'add');
  }
  isCart(id) {
    return this.productService.setCartList(id, 'isCart');
  }
  removeItem(id) {
    this.productService.setCartList(id, 'delete');
  }

}
