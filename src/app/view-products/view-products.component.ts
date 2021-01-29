import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  selectedItemToCart;

  constructor( private router: Router, public productDetails: ProductService,
              public productService: ProductService) { }

  ngOnInit(): void {
  }



}
