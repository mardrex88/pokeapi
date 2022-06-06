import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../characters.service';
import { ResponseDetails } from '../models/response-details-pokemon';
import { Response, Pokemon} from '../models/response-pokemon';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  namePokemon!: string; 
  urlImage!:string;
  data  !: Pokemon[];
  details !: ResponseDetails;


  constructor(private characterService:CharacterService) {
    this.getAllPokemon();
   }

  ngOnInit(): void {
  }

  search(){
    this.characterService.getPokemon(this.namePokemon).subscribe((data:any) => {
      this.urlImage = data.sprites.front_default;
    });
  }
  searchByName(name:string){
    this.characterService.getPokemon(name).subscribe((data:ResponseDetails) => {
      console.log(data)
      this.details = data;
      this.urlImage = data.sprites.front_default;
    });
  }

  getAllPokemon(){
    this.characterService.getAll().subscribe((resp:Response) =>
    {
     this.data = resp.results;
    });
  }
}
