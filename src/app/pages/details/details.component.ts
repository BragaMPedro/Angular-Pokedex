import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  private urlPokemon = "http://pokeapi.co/api/v2/pokemon"
  private urlName = "http://pokeapi.co/api/v2/pokemon-species"

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PokeApiService
  ) {}

  ngOnInit(): void {
    this.pokemon;
  }

  get pokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.service.getPokemon(`${this.urlPokemon}/${id}`);
    const name = this.service.getPokemon(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(res=>{
      console.log(res);
      
    })

  }
}
