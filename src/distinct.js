"use strict";
var DistinctSolution = /** @class */ (function () {
    function DistinctSolution() {
    }
    DistinctSolution.prototype.verifyNumberInArray = function (num, arr) {
        return arr.includes(num);
    };
    DistinctSolution.prototype.solution = function (arr) {
        var _this = this;
        var distNum = [];
        arr.map(function (i) {
            if (i === 0) {
                distNum.push(i);
            }
            else if (!_this.verifyNumberInArray(i, distNum)) {
                distNum.push(i);
            }
        });
        return distNum.length;
    };
    return DistinctSolution;
}());
var distinctSol = new DistinctSolution();
console.log(distinctSol.solution([2, 1, 1, 2, 3, 1]));
