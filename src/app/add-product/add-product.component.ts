import { Component, OnInit } from '@angular/core';
import { ProductsDetails } from '../product.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private router :Router, public product:ProductsDetails) { }

  ngOnInit(): void {
  }
  addProduct(data){
    console.log(data.value);
    this.product.add(data.value);
    data.reset();
    this.router.navigateByUrl('/viewproduct');
}

}
