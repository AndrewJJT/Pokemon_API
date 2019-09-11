import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon()
    
  }

  getPokemon(){
    let pokemonObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/127/');
    pokemonObservable.subscribe(data => {

      console.log("Got the pokemon!", data);
      console.log("Pokemon name: ", data.name);
      console.log("Ability", data.abilities[1].ability.url);
      this.getAbility(data.abilities[1].ability.url);

    });
 }

 getAbility(url){
  let abilityObservable = this._http.get(url);
  abilityObservable.subscribe(data =>{
    console.log("Show the ability info: ", data);

    console.log(`${data.pokemon.length} pokemons share the ability of ${data.name}`)
  })
 }
 

}
