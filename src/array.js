"use strict";
var ArraySolution = /** @class */ (function () {
    function ArraySolution() {
    }
    ArraySolution.prototype.verifyNumberInArray = function (num, arr) {
        for (var j in arr) {
            if (arr[j].valor === num) {
                return true;
            }
        }
        return false;
    };
    ArraySolution.prototype.checkOcurencies = function (Objarr) {
        for (var i in Objarr) {
            if (Objarr[i].ocorrencias % 2 !== 0) {
                return Objarr[i].valor;
            }
        }
    };
    ArraySolution.prototype.solution = function (arr) {
        var arrObj = [];
        for (var i = 0; i < arr.length; i++) {
            if (i === 0) {
                arrObj.push({ valor: arr[i], ocorrencias: 0 });
            }
            else {
                if (!this.verifyNumberInArray(arr[i], arrObj)) {
                    arrObj.push({ valor: arr[i], ocorrencias: 0 });
                }
            }
        }
        for (var j in arrObj) {
            for (var i = 0; i < arr.length; i++) {
                if (arrObj[j].valor === arr[i]) {
                    arrObj[j].ocorrencias += 1;
                }
            }
        }
        return this.checkOcurencies(arrObj);
    };
    return ArraySolution;
}());
var arraySol = new ArraySolution();
console.log(arraySol.solution([9, 3, 9, 3, 9, 7, 9]));
