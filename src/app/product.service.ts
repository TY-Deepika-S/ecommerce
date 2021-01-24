import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from '../app/product.model';
import { Router} from "@angular/router";

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

  selectedName:null;
  selectedPrice:null;
  selectedDescription:null;
  selectedUrl:null;
  constructor(private router:Router) {}

  add(data){
    console.log(data.value);
    this.product.push(data.value);
    data.reset();
    this.router.navigateByUrl('/view');
  }
  delete(i){
    if(confirm('are u sure')){
      this.product.splice(i,1);
      alert("deleted successfuly")
    }
  }
  //function to edit the product details
  edit(data, index){
    console.log(data);
    console.log(index);
    this.selectedName= data.prodName;
    this.selectedPrice= data.prodPrice;
    this.selectedDescription= data.prodDescription;
    this.selectedUrl= data.prodImageUrl;
    this.product.splice(index, 1);
    this.router.navigateByUrl('/add');
  }

}

