import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = 'Mens wear'

  updateSearchText(event: Event) {
    const { value } = (event.target as HTMLSelectElement);
    this.searchText = value;
  }
}
