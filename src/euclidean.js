"use strict";
var EuclideanSolution = /** @class */ (function () {
    function EuclideanSolution() {
    }
    EuclideanSolution.prototype.solution = function (chocolates, interval) {
        var i = -interval;
        var chocNumber = [];
        while (true) {
            i += interval;
            if (i > chocolates - 1) {
                i -= chocolates;
            }
            for (var j = 0; j < chocNumber.length; j++) {
                if (i === chocNumber[j]) {
                    return chocNumber.length;
                }
            }
            chocNumber.push(i);
        }
    };
    return EuclideanSolution;
}());
var euclideanSol = new EuclideanSolution();
console.log(euclideanSol.solution(10, 4));
