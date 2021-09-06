"use strict";
var DistinctSolution = /** @class */ (function () {
    function DistinctSolution() {
    }
    DistinctSolution.prototype.verifyNumberInArray = function (num, arr) {
        for (var j in arr) {
            if (arr[j] === num) {
                return true;
            }
        }
        return false;
    };
    DistinctSolution.prototype.solution = function (arr) {
        var distNum = [];
        for (var i = 0; i < arr.length; i++) {
            if (i === 0) {
                distNum.push(arr[i]);
            }
            else {
                if (!this.verifyNumberInArray(arr[i], distNum)) {
                    distNum.push(arr[i]);
                }
            }
        }
        return distNum.length;
    };
    return DistinctSolution;
}());
var distinctSol = new DistinctSolution();
console.log(distinctSol.solution([2, 1, 1, 2, 3, 1]));
