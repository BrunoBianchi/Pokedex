import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map, tap} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url:string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=118";
  private urlTypes:string = "https://pokeapi.co/api/v2/type/";
  constructor(private http:HttpClient) { }
  get apiListAllPokemons ():Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap( res=>res),
      tap(res=>res.results.map((resPokemons:any)=>{
        this.http.get<any>(resPokemons.url).pipe( 
          map(res=>res)
        ).subscribe(
          res=>resPokemons.status = res
        )
      })
      )
    );
  }

  public apiGetPokemons(url:string):Observable<any> {
    return this.http.get<any>(url).pipe( 
      map(res=>res)
    )
  }
  public apiListSimilarPokemons(type:string):Observable<any> {
    return this.http.get<any>(`${this.urlTypes}${type}`).pipe(
      res=>res,
    )
  }
  public apiGetEvolutions(url:string):Observable<any> {
    return this.http.get<any>(url).pipe(
      res=>res,
    )
  }
}
