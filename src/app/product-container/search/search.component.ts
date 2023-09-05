import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string = '';

  @Output()
  searchStringChanged: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(event: Event) {
    const { value } = (event.target as HTMLSelectElement);
    this.searchText = value;
  }

  onSearchTextChange() {
    this.searchStringChanged.emit(this.searchText)
  }
}
