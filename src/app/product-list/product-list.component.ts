import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  addToCart: number = 0
  // name = ''
  product = {
    name: "iPhone",
    price: 999,
    color: "Light Pink",
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/img/catPNG.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  decCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--
    }
  }

  incCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++
    }
  }

  // onNameChange(event: Event) {
  //   const { value } = (event.target as HTMLSelectElement);
  //   this.name = value;
  // }
}
