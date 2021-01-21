import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/viewproduct', pathMatch:'full'
  },
  {
    path:'view', component: ViewproductComponent
  },
  {
    path: 'add', component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
