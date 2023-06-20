import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { ErrorLoadComponent } from './error-load/error-load.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    ErrorLoadComponent,
    ScrollButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    ScrollButtonComponent,
    ErrorLoadComponent
  ]
})
export class ComponentsModule { }
