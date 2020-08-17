import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  // products: Product[];
  products: any;
  product: Product;
  prodId: String;
  prodName: String;
  price: String;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      console.log('Product Component -> ngOnInit -> products', products);

      this.products = products;
    });
  }
}