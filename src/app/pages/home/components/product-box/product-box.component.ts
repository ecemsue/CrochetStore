import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product = PRODUCTS  ;
  @Output() addToCart = new EventEmitter();

 

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }


}