"use strict";
var ArraySolution = /** @class */ (function () {
    function ArraySolution() {
    }
    ArraySolution.prototype.verifyNumberInArray = function (num, arr) {
        arr.map(function (j) {
            if (j.valor === num) {
                return true;
            }
        });
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
        var _this = this;
        var arrObj = [];
        arr.map(function (i) {
            if (i === 0) {
                arrObj.push({ valor: i, ocorrencias: 0 });
            }
            else {
                if (!_this.verifyNumberInArray(i, arrObj)) {
                    arrObj.push({ valor: i, ocorrencias: 0 });
                }
            }
        });
        arrObj.map(function (item) {
            var ocurrencyNum = arr.filter(function (x) { return item.valor === x; }).length;
            item.ocorrencias = ocurrencyNum;
        });
        return this.checkOcurencies(arrObj);
    };
    return ArraySolution;
}());
var arraySol = new ArraySolution();
console.log(arraySol.solution([9, 3, 9, 3, 9, 7, 9]));
