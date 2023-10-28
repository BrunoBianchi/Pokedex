import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { RouterModule } from '@angular/router';
import { PokeSimilarComponent } from './poke-similar/poke-similar.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeSimilarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeSimilarComponent
  ]
})
export class SharedModule { }
