import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  namePokemon!: string; 
  urlImage!:string;

  constructor(private characterService:CharacterService) { }

  ngOnInit(): void {
  }

  search(){
    this.characterService.getPokemon(this.namePokemon).subscribe((data:any) => {
      this.urlImage = data.sprites.front_default;
    });
  }
}
