class DistinctSolution {
  verifyNumberInArray(num: number, arr: Array<number>): boolean {
    return arr.includes(num);
  }

  solution(arr: Array<number>) {
    const distNum: Array<number> = [];

    arr.map((i) => {
      if (i === 0) {
        distNum.push(i);
      } else if (!this.verifyNumberInArray(i, distNum)) {
        distNum.push(i);
      }
    });

    return distNum.length;
  }
}

let distinctSol: DistinctSolution = new DistinctSolution();
console.log(distinctSol.solution([2, 1, 1, 2, 3, 1]));
