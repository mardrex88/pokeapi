import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Character } from "./character";
import { ResponseDetails } from './models/response-details-pokemon';
import { Response } from './models/response-pokemon';

@Injectable({
    providedIn:'root'
})

export class CharacterService {

    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = 'https://pokeapi.co/api/v2/pokemon'
    }


    getPokemon(namePokemon:string){
        return this.http.get<ResponseDetails>(this.baseUrl + "/"+namePokemon);
      }
     
      getAll(){
        return this.http.get<Response>(this.baseUrl);
      }
}
