import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  quantity = 1;
  constructor(private router: Router, public productDetails: ProductService ) { }

  ngOnInit(): void {
  }

}
