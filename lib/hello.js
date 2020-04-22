'use strict';

var _environment = require('./environment.js');

var _additions = require('./additions.js');

var _fileProcessing = require('./fileProcessing.js');

var defaultLine = "Start Your Journey Now <br> Enter Commands By Using The Query Box Below!";
var environment = new _environment.Environment("Forest");

var treasures = new WeakMap();
var trescoords = new Set();
var _fileInput;

function main() {
    var enterEle = document.querySelector('#enterbtn');
    enterEle.addEventListener("click", onClickEnter, false);
    addToOutput();
    var coord1 = {
        x: 2,
        y: 2
    };
    _fileInput = document.querySelector('#files');
    _fileInput.onchange = function () {
        (0, _fileProcessing.onChange)(_fileInput.files, trescoords, treasures);
        addToOutput("<hr>TREASURE HAS BEEN UPDATED <hr>");
    };
}

function findTreasures() {
    var findcoords = void 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = trescoords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var coords = _step.value;

            if (coords.x == x && coords.y == y) {
                findcoords = coords;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (findcoords) {
        var _treasures$get = treasures.get(findcoords),
            name = _treasures$get.name,
            value = _treasures$get.value;

        if (value) {
            addToOutput('You Found ' + name + ' of value ' + value);
        }
    }
}

var x = 0,
    y = 0;

function navigate(stepX, stepY) {
    var _ref = [x + stepX, y + stepY];
    x = _ref[0];
    y = _ref[1];

    var coords = document.querySelector('#co-ords');
    coords.innerHTML = x + ' , ' + y;
    findTreasures();
}

function addToOutput() {
    var newCommand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLine;

    var outputele = document.querySelector("#board");
    outputele.innerHTML = outputele.innerHTML + '<br>' + newCommand;
}

var WriteFn = function WriteFn(msg) {
    return addToOutput('<span style="color:yellow"><i>' + msg + '</i></span>');
};

function onCommand(command) {
    if (command.toLowerCase() == 'help') {
        _additions.options.outputOptions(WriteFn);
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
    } else if (command == 'poke') {
        addToOutput(environment.poke());
    } else {
        addToOutput(command);
    }
}

function onClickEnter() {
    var commandelee = document.querySelector('#query');
    var command = commandelee.value;
    onCommand(command);
    commandelee.value = "";
    commandelee.focus();
}

main();
console.log(Object.getOwnPropertySymbols(_additions.options));
//# sourceMappingURL=hello.js.map