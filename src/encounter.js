import "babel-core/register";
import "babel-polyfill";

export class Encounter{
    constructor(introText=""){
        this.introText = introText;
    }
    whenEncounter(){
        return this.introText;
    }
    * poke(){
        yield "Hey What's UP, There's Nothing Here";
    }
}


export class Bear extends Encounter{
   constructor(){
       super("Growlll Grrr, You Ecountered a Bear!");
   }
    * poke(){
        yield "You Little Kid, I am the Bear of Dawn";
        yield "I am too Angry Right Now";
        yield "Bear is Attacking You!! RUNNNNNN";
        
    }
    
}

export class Angel extends Encounter{
   constructor(){
       super("Halleluijah, You Ecountered a Angel!");
   }
    * poke(){
        yield "I am The Angel From God";
        yield "I can Heal You Boy";
    }
}

export class Zombie extends Encounter{
   constructor(){
       super("Booh Woooh ZOooo, You Ecountered a Zombie!");
   }
    * poke(){
        yield "oowwhhh La lah lah I am The ZOMBIEEE";
        yield "I am too Hungry Right Now";
        yield "Zombie Wants to Eat You!! RUNNNNNN";
        
    }
}


export function generate(){
    var index = Math.floor(Math.random()*3)+1;
    if(index==1){
        return new Bear();
    }
    else if(index==2){
        return new Angel();
    }
    else if(index==3){
        return new Zombie();
    }
    else{
        return new Encounter();
    }
}