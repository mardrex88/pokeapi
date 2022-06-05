import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Character } from "./character";

@Injectable({
    providedIn:'root'
})

export class CharacterService {

    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = 'https://pokeapi.co/api/v2/pokemon'
    }


    getPokemon(namePokemon:string){
        return this.http.get(this.baseUrl + "/"+namePokemon);
      }
     
      getAll(){
        return this.http.get(this.baseUrl);
      }
}
