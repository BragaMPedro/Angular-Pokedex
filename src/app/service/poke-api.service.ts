import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, switchMap } from 'rxjs';
import { PokemonListResponse } from '../models/pokemonListResponse';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
  private nextPage: string = "";

  constructor(private http: HttpClient) {}

  get getAllPokemon(): Observable<any> {
    return this.http.get<PokemonListResponse>(this.url).pipe(
      tap(res => this.nextPage = res.next),
      map((res) => res.results),
      tap((results) =>
        results.map((result: any) => {
          this.getPokemon(result.url).subscribe((res) => result.status = res);
        })
      ),
    );
  }
  
  get getMorePokemon(): Observable<any> {
    return this.http.get<PokemonListResponse>(this.nextPage.replace("limit=100", "limit=20")).pipe(
      tap(res => this.nextPage = res.next),
      map((res) => res.results),
      tap((results) =>
        results.map((result: any) => {
          this.getPokemon(result.url).subscribe((res) => result.status = res);
        })
      ),
    );
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}
