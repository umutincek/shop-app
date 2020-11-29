import { ProductService } from './../services/product.service';
import { Category } from './Category';
import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ProductService]
})
export class CategoryComponent implements OnInit {
  count = this.productService.cartList.length;
  faShoppingCart = faShoppingCart;
  constructor(private productService: ProductService) {}
  categories: Category[];
  ngOnInit(): void {
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
