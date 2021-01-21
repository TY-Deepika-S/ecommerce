import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from '../app/product.model';

@Injectable({
  providedIn: 'root'

})

export class ProductsDetails {
  product : Product [] = [{
    prodName:'rice',
    prodPrice: 1000,
    prodDescription: 'good quality',
    prodImageUrl:'https://cdn.pixabay.com/photo/2016/02/19/11/23/bicycle-1209682__340.jpg'
  }];

  add(data){
    this.product.push(data);
    console.log(this.product);
  }


}

