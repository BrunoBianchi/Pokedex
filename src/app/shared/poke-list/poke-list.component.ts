import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private setAllPokemons:any;
    public getAllPokemons:any;
    constructor(private pokeApiService:PokeApiService) {

    }
    public pokeColor(value:any) {
      switch(value) {
        case 'poison':
          return '#cc54ff'
        break;
        case 'water':
          return '#54c0ff'
        break;
        case 'bug':
          return '#daff54'
        break;
        case 'dark':
          return '#ff9554'
        break;
        case 'dragon':
          return '#9b54ff'
        break;
        case 'fairy':
          return '#ff54e0'
        break;
        case 'fighting':
          return '#ffa754'
        break;
        case 'fire':
          return '#ff5473'
        break;
        case 'flying':
          return '#5493ff'
        break;
        case 'ghost':
          return '#7654ff'
        break;
        case 'grass':
          return '#54ff5c'
        break;
        case 'ground':
          return '#ffc954'
        break;
        case 'ice':
          return '#54ffff'
        break;
        case 'psychic':
          return '#ff54bb'
        break;
        case 'rock':
          return '#fcab6d'
        break;
        case 'steel':
          return '#d3c0b1'
        break;
        case 'electric':
          return 'gold'
        break;
        default: return '#EFEFEF'
      }
      return;
    }
    public getSearch(value:any) {
      const filter = this.setAllPokemons.filter((res:any)=>{
        return !res.name.indexOf(value.toLowerCase());
      })
      this.getAllPokemons = filter;
    }
    ngOnInit(): void {
      this.pokeApiService.apiListAllPokemons.subscribe(
        res=> {
          this.setAllPokemons = res.results;
          this.getAllPokemons = res.results;
        }
        )
    }
}
