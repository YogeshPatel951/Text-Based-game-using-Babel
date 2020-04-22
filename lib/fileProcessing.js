"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onChange = undefined;

var onChange = exports.onChange = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(files, trescoords, treasures) {
        var processed_array, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, results, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _onFileSelected(files);

                    case 3:
                        processed_array = _context.sent;
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 7;
                        _iterator = processed_array[Symbol.iterator]();

                    case 9:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 33;
                            break;
                        }

                        results = _step.value;
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context.prev = 14;


                        for (_iterator2 = results[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            result = _step2.value;

                            trescoords.add(result.coordinates);
                            treasures.set(result.coordinates, result.treasure);
                        }
                        _context.next = 22;
                        break;

                    case 18:
                        _context.prev = 18;
                        _context.t0 = _context["catch"](14);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context.t0;

                    case 22:
                        _context.prev = 22;
                        _context.prev = 23;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }

                    case 25:
                        _context.prev = 25;

                        if (!_didIteratorError2) {
                            _context.next = 28;
                            break;
                        }

                        throw _iteratorError2;

                    case 28:
                        return _context.finish(25);

                    case 29:
                        return _context.finish(22);

                    case 30:
                        _iteratorNormalCompletion = true;
                        _context.next = 9;
                        break;

                    case 33:
                        _context.next = 39;
                        break;

                    case 35:
                        _context.prev = 35;
                        _context.t1 = _context["catch"](7);
                        _didIteratorError = true;
                        _iteratorError = _context.t1;

                    case 39:
                        _context.prev = 39;
                        _context.prev = 40;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 42:
                        _context.prev = 42;

                        if (!_didIteratorError) {
                            _context.next = 45;
                            break;
                        }

                        throw _iteratorError;

                    case 45:
                        return _context.finish(42);

                    case 46:
                        return _context.finish(39);

                    case 47:
                        _context.next = 52;
                        break;

                    case 49:
                        _context.prev = 49;
                        _context.t2 = _context["catch"](0);

                        console.log("file", "reading Error " + _context.t2);

                    case 52:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 49], [7, 35, 39, 47], [14, 18, 22, 30], [23,, 25, 29], [40,, 42, 46]]);
    }));

    return function onChange(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

require("babel-core/register");

require("babel-polyfill");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _onFileSelected(files) {

    var promise = Promise.resolve();
    var array_promises = [];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        array_promises.push(pFileReader(file));
    }

    return Promise.all(array_promises);
}

function pFileReader(file) {
    var reader = new FileReader();
    return new Promise(function (resolve, reject) {
        reader.onload = function (evnt) {

            if (evnt.target.readyState == FileReader.DONE) {

                resolve(JSON.parse(evnt.target.result));
            }
        };
        if (file) {

            reader.readAsText(file, "UTF-8");
        }
    });
}
//# sourceMappingURL=fileProcessing.js.map