import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-similar',
  templateUrl: './poke-similar.component.html',
  styleUrls: ['./poke-similar.component.scss']
})
export class PokeSimilarComponent implements OnInit {
  public similarPokemons:any;
  public pokemon:Array<{nome:string,img:string,id:number}> = [];
  private urlPokemon:string = "https://pokeapi.co/api/v2/pokemon";
  detailsComponent: any;
  constructor(private pokeApiService: PokeApiService,private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`).forEach((status:any)=>{
      this.pokeApiService.apiListSimilarPokemons(status.types[0].type.name).subscribe(res=>{
        res.pokemon.sort(() => Math.random() - 0.5).filter((pokemon:any)=>{return pokemon.pokemon.name != status.name}).slice(0,4).forEach((poke:any)=>{
          this.pokemon.push({
            id:poke.pokemon.url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0],
            nome:poke.pokemon.name,
            img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.pokemon.url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0]}.svg`
          })
        })
      })
    }) 
  }
}
