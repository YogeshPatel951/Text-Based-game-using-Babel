import * as enounter from './encounter.js';
export class Environment{
    constructor(name){
        this.name=name;
    }
    
    stumbleUpon(){
        this.encounter = new enounter.generate();
        this.pokeEncounter = this.encounter.poke();
        
        var interaction = this.name + " You just Stumbled Upon --> "+ this.encounter.whenEncounter();
        return interaction;
    }
    
    poke(){
        var pokeReturn = this.pokeEncounter.next();
        if(!pokeReturn.done){
            return pokeReturn.value;
        }
    }
}