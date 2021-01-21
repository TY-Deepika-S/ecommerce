import { Component, OnInit } from '@angular/core';
import { ProductsDetails } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(public product: ProductsDetails) { }

  ngOnInit(): void {
  }

}
