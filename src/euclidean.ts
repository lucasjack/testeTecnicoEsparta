class EuclideanSolution {
  solution(chocolates: number, interval: number) {
    let i = -interval;
    let chocNumber = [];
    while (true) {
      i += interval;
      if (i > chocolates - 1) {
        i -= chocolates;
      }
      for (let j = 0; j < chocNumber.length; j++) {
        if (i === chocNumber[j]) {
          return chocNumber.length;
        }
      }
      chocNumber.push(i);
    }
  }
}

let euclideanSol: EuclideanSolution = new EuclideanSolution();
console.log(euclideanSol.solution(10, 4));
