import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
   product: Product | undefined = {
    id: 1,
    title: 'Luffy',
    price: 50,
    category: 'Amigurumi',
    description: 'One Piece',
    image: 'https://i.pinimg.com/750x/18/9d/a2/189da225a2741503bfd9f20271bb4a7c.jpg'

   };



  @Output() addToCart = new EventEmitter();

  constructor() {}

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}