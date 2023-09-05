import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { SearchComponent } from './product-container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-container/product-list/product-list.component';
import { ProductComponent } from './product-container/product-list/product/product.component';
import { FilterComponent } from './product-container/product-list/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    ProductContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
