import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddClassicComponent } from './product/product-add-classic/product-add-classic.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'product-add-1',
    component: ProductAddClassicComponent
  },
  {
    path: 'product-add-2',
    component: ProductComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products/category/:categoryId',
    component: ProductComponent
  },
  {
    path: 'products/shopping-cart',
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
