import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { NgModule } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  count = '12';
  sort = 'desc';
  category: string | undefined;
  products= PRODUCTS;
  

  constructor(
    private cartService: CartService,
    
  ) {}

  ngOnInit(): void {
    
  } 

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }


  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  
}