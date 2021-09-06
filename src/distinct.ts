class DistinctSolution {
  verifyNumberInArray(num: number, arr: Array<number>): boolean {
    for (let j in arr) {
      if (arr[j] === num) {
        return true;
      }
    }
    return false;
  }
  solution(arr: Array<number>) {
    let distNum = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        distNum.push(arr[i]);
      } else {
        if (!this.verifyNumberInArray(arr[i], distNum)) {
          distNum.push(arr[i]);
        }
      }
    }
    return distNum.length;
  }
}

let distinctSol: DistinctSolution = new DistinctSolution();
console.log(distinctSol.solution([2, 1, 1, 2, 3, 1]));
