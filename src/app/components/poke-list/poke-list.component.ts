import { Component, OnInit } from '@angular/core';
import { PokeResult } from 'src/app/models/pokemonListResponse';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {


  private setAllPokemon!: PokeResult[];
  public allPokemon!: PokeResult[];
  public apiError: boolean = false;

  constructor(private service: PokeApiService) {}


  ngOnInit(): void {
    this.service.getAllPokemon.subscribe( res => {
      this.setAllPokemon = res;
      this.allPokemon = this.setAllPokemon;
    },
    error => {
      this.apiError = true
    });
  }

  getSearch(value: string){
    const filter = this.setAllPokemon.filter(res =>{
      return !res.name.indexOf(value.toLowerCase())
    })
    this.allPokemon = filter;
  }
}
