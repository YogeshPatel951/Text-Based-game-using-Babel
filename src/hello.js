import {Environment} from './environment.js';
import {options} from './additions.js';
import {onChange} from './fileProcessing.js';

const defaultLine = "Start Your Journey Now <br> Enter Commands By Using The Query Box Below!";
let environment = new Environment("Forest");

var treasures = new WeakMap();
var trescoords = new Set();
var _fileInput;


function main() {
    let enterEle = document.querySelector('#enterbtn');
    enterEle.addEventListener("click", onClickEnter, false);
    addToOutput();
    var coord1 = {
        x: 2,
        y: 2
    };
     _fileInput=document.querySelector('#files');
    _fileInput.onchange = function(){
        onChange(_fileInput.files,trescoords,treasures);  
        addToOutput("<hr>TREASURE HAS BEEN UPDATED <hr>");
    };

}





function findTreasures() {
    let findcoords;
    for (let coords of trescoords) {
        if (coords.x == x && coords.y == y) {
            findcoords = coords;
        }
    }
    if (findcoords) {
        var {
            name,
            value
        } = treasures.get(findcoords);
        if (value) {
            addToOutput(`You Found ${name} of value ${value}`);
        }
    }
}

var x = 0,
    y = 0;

function navigate(stepX, stepY) {
    [x, y] = [x + stepX, y + stepY];
    let coords = document.querySelector('#co-ords');
    coords.innerHTML = `${x} , ${y}`;
    findTreasures()
}

function addToOutput(newCommand = defaultLine) {
    let outputele = document.querySelector("#board");
    outputele.innerHTML = outputele.innerHTML + '<br>' + newCommand;
}


var WriteFn = msg => addToOutput('<span style="color:yellow"><i>'+msg+'</i></span>');


function onCommand(command) {
    if (command.toLowerCase() == 'help') {
        options.outputOptions(WriteFn);
    } else if (command == 'left') {
        navigate(-1, 0);
        addToOutput(environment.stumbleUpon());
    } else if (command == 'right') {
        navigate(1, 0);
        addToOutput(environment.stumbleUpon());
    } else if (command == 'up') {
        navigate(0, 1);
        addToOutput(environment.stumbleUpon());
    } else if (command == 'down') {
        navigate(0, -1);
        addToOutput(environment.stumbleUpon());
    }
    else if (command == 'poke') {
        addToOutput(environment.poke());
    }else {
        addToOutput(command);
    }

}

function onClickEnter() {
    let commandelee = document.querySelector('#query');
    let command=commandelee.value;
    onCommand(command);
    commandelee.value="";
    commandelee.focus();
}

main();
console.log(Object.getOwnPropertySymbols(options));