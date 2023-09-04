import { Component } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent {
  listOfString :string[] = ["Mary", "Bob", "Linda", "John"]

  // onNameChange(event: Event) {
  //   const { value } = (event.target as HTMLSelectElement);
  //   this.name = value;
  // }
}
