import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, tap } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon = 'http://pokeapi.co/api/v2/pokemon';
  private urlName = 'http://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = true;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.service.getPokemon(`${this.urlPokemon}/${id}`);
    const name = this.service.getPokemon(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe({
      next: (res) => this.pokemon = res,
      error: (e) => {
        this.apiError = true;
        console.log(e);
      },
      complete: () => this.isLoading = false
    });
  }
}
