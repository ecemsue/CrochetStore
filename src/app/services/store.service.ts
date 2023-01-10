import { Injectable } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  getProducts(): Product[] {
    return PRODUCTS;
  }

  constructor() { }
}
