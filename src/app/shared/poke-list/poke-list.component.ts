import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;
  public pokeArray: any;
  public index: number = 1;
  public loading: boolean = false;
  public loadTxt: string = 'Carregar Mais';
  public filter: any = {
    name: String,
    type: String,
  };
  constructor(private pokeApiService: PokeApiService) {}
  public pokeColor(value: any) {
    switch (value) {
      case 'poison':
        return '#cc54ff';
        break;
      case 'water':
        return '#54c0ff';
        break;
      case 'bug':
        return '#daff54';
        break;
      case 'dark':
        return '#ff9554';
        break;
      case 'dragon':
        return '#9b54ff';
        break;
      case 'fairy':
        return '#ff54e0';
        break;
      case 'fighting':
        return '#ffa754';
        break;
      case 'fire':
        return '#ff5473';
        break;
      case 'flying':
        return '#5493ff';
        break;
      case 'ghost':
        return '#7654ff';
        break;
      case 'grass':
        return '#54ff5c';
        break;
      case 'ground':
        return '#ffc954';
        break;
      case 'ice':
        return '#54ffff';
        break;
      case 'psychic':
        return '#ff54bb';
        break;
      case 'rock':
        return '#fcab6d';
        break;
      case 'steel':
        return '#d3c0b1';
        break;
      case 'electric':
        return 'gold';
        break;
      default:
        return '#EFEFEF';
    }
    return;
  }
  public getSearch(value: any) {
    this.filter.name = value;
    let filter = this.setAllPokemons
      .filter((res: any) => {
        return !res.name.indexOf(value.toLowerCase());
      })
      if(this.filter.type != "function String() { [native code] }") {
        filter =  filter.filter((poke:any)=>{
          return poke.status.types.some((type:any)=>{
            return type.type.name === this.filter.type
          })
        })
      }
      this.getAllPokemons = filter.splice(0,this.index*6);
  }
  public getQuery(value: any) {
    this.filter.type = value.type;
    const filter = this.setAllPokemons
      .filter((res: any) => {
        return res.status.types.find((t: any) => {
          return t.type.name == value.type;
        });
      })
      .slice(0, 6 * this.index);
    this.getAllPokemons = filter;
  }
  public loadMore(filter?: any) {
    if(filter.name.toString() == "function String() { [native code] }") {
      filter.name = "";    
    }
     if(filter.type.toString() == "function String() { [native code] }") {
      filter.type= "";  
    }
    this.loading = true;
    this.loadTxt = 'Carregando ...';
    setTimeout(() => {
      this.index++;
      if(filter.type != "" && filter.name !="") {
        let result:any = [];
        this.pokeArray
          .filter((poke: any) => {
              poke.type = poke.status.types;         
              if(filter.name != "" && !poke.name.indexOf(filter.name) && filter.type != "" && poke.type.some((type:any)=>{return type.type.name == filter.type})) {
                result.push(poke)
              }else if(filter.name != "" && !poke.name.indexOf(filter.name) && filter.type == "") {
                result.push(poke)
              }else if(filter.type != "" && poke.type.some((type:any)=>{return type.type.name == filter.type}) && filter.name == "") {
                result.push(poke)
              }
          })
        this.getAllPokemons =  result;
      }else if(filter.name == "" && filter.type == "" || filter.name !="" && filter.type == "") {
        this.getAllPokemons = this.pokeArray.splice(0,this.index*6);
      }else if(filter.name == "" && filter.type != "") {
        const result = this.setAllPokemons
        .filter((res: any) => {
          return res.status.types.find((t: any) => {
            return t.type.name ==filter.type;
          });
        })
        .slice(0, 6 * this.index);
        if(result.lengt <=0) {
          this.getAllPokemons = this.pokeArray.splice(0,6);
        }else {
          this.getAllPokemons = result;
        }


      }
     
      this.loading = false;
      this.loadTxt = 'Carregar Mais';
    }, 1100);
  }
  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe((res) => {
      this.pokeArray = res.results;
      this.setAllPokemons = res.results;
      this.getAllPokemons = res.results.slice(0, 6);
    });
  }
}
