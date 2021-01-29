import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CartComponent } from './cart/cart.component';
import { ViewProductsComponent } from './view-products/view-products.component';


const routes: Routes = [
  {path: '', redirectTo: '/view-product', pathMatch: 'full'},
    { path: 'add-products', component: AddProductsComponent},
    { path: 'view-products', component: ViewProductsComponent},
    { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
