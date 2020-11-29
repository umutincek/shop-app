import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category/Category';
import { Product } from '../Product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-classic',
  templateUrl: './product-add-classic.component.html',
  styleUrls: ['./product-add-classic.component.css'],
  providers: [ProductService],
})
export class ProductAddClassicComponent implements OnInit {
  constructor(private productService: ProductService) {}
  model: Product = new Product();
  categories: Category[];

  ngOnInit(): void {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe((data) => {
      console.log(data);
    });
  }
}
