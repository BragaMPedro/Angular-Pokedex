import { Pokemon } from "./pokemon";

export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous?: string;
    results:  PokeResult[];
}

export interface PokeResult {
    name: string;
    url:  string;
    status?: Pokemon
}