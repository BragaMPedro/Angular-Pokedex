export interface Pokemon {
    abilities:                Ability[];
    base_experience:          number;
    forms:                    NameUrl[];
    game_indices:             GameIndex[];
    height:                   number;
    held_items:               any[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    past_types:               any[];
    species:                  NameUrl;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}

export interface Ability {
    ability:   NameUrl;
    is_hidden: boolean;
    slot:      number;
}

export interface NameUrl {
    name: string;
    url:  string;
}

export interface GameIndex {
    game_index: number;
    version:    NameUrl;
}

export interface Move {
    move:                  NameUrl;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at:  number;
    move_learn_method: NameUrl;
    version_group:     NameUrl;
}

export interface Sprites {
    back_default:       string;
    back_female?:        string;
    back_shiny:         string;
    back_shiny_female?:  string;
    front_default:      string;
    front_female?:       string;
    front_shiny:        string;
    front_shiny_female?: string;
    other:              Other;
    versions:           Versions;
}

export interface Other {
    dream_world:        DreamWorld;
    home:               Home;
    "official-artwork": OfficialArtwork;
}

export interface DreamWorld {
    front_default: string;
    front_female?:  string;
}

export interface Home {
    front_default:      string;
    front_female?:       string;
    front_shiny:        string;
    front_shiny_female?: string;
}

export interface OfficialArtwork {
    front_default: string;
    front_shiny:   string;
}

export interface Versions {
}

export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      NameUrl;
}

export interface Type {
    slot: number;
    type: NameUrl;
}