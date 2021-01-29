import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    {
      productName: 'car',
      productPrice: 500000,
      productImageURL:
        'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png',
      productDescription: 'very nice car',
    },
  ];
  variable = -1;
  constructor(private router: Router) {}
  selectedName: null;
  selectedPrice: null;
  selectedImageURL: null;
  selectedDescription: null;

  onSubmit(data: NgForm) {
    if (this.variable == -1) {
      var temp = data.value;
      data.reset();
      this.products.push(temp);
      console.log(this.products);
      alert("product added successfully!");

    }else {
      var temp = data.value;
      data.reset();
      this.products.splice(this.variable, 1, temp);
      console.log(this.products)
      this.router.navigateByUrl('/view-products');
      alert("product information updated!");
    }
  }
  deleteProduct(index){
    this.products.splice(index, 1);
  }

  editProduct(data, index){
    this.variable = index;
    this.selectedName = data.productName;
    this.selectedPrice = data.productPrice;
    this.selectedImageURL = data.productImageURL;
    this.selectedDescription = data.productDescription;
    this.router.navigateByUrl('/add-products');
  }
store=[];
  addToCart(data, i){
    this.variable=i;
    this.store.push({...data,quantity:1});
    console.log(this.store)
    alert("product added to cart successfully!");
  }
  removeCart(index){
    this.store.splice(index, 1);
  }
}
