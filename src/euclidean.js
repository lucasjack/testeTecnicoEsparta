"use strict";
var EuclideanSolution = /** @class */ (function () {
    function EuclideanSolution() {
    }
    EuclideanSolution.prototype.solution = function (chocolates, interval) {
        var i = -interval;
        var wrapper = [];
        while (true) {
            i += interval;
            if (i > chocolates - 1) {
                i -= chocolates;
            }
            var eatenWrapper = wrapper.filter(function (x) { return x === i; }).length;
            if (eatenWrapper) {
                return wrapper.length;
            }
            wrapper.push(i);
        }
    };
    return EuclideanSolution;
}());
var euclideanSol = new EuclideanSolution();
console.log(euclideanSol.solution(10, 4));
