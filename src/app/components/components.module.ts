import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { ErrorLoadComponent } from './error-load/error-load.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    ErrorLoadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    ErrorLoadComponent
  ]
})
export class ComponentsModule { }
