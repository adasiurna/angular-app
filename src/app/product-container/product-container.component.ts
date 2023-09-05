import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent {
  
  searchText: string = '';

  // onNameChange(event: Event) {
  //   const { value } = (event.target as HTMLSelectElement);
  //   this.name = value;
  // }

  setSearchText(value: string) {
    this.searchText = value;
    console.log('setSearchText in container, value:', value);
  }
}
