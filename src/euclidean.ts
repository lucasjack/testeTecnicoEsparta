class EuclideanSolution {
  solution(chocolates: number, interval: number) {
    let i: number = -interval;
    const wrapper: Array<number> = [];

    while (true) {
      i += interval;
      if (i > chocolates - 1) {
        i -= chocolates;
      }

      const eatenWrapper: number = wrapper.filter((x) => x === i).length;

      if (eatenWrapper) {
        return wrapper.length;
      }

      wrapper.push(i);
    }
  }
}

let euclideanSol: EuclideanSolution = new EuclideanSolution();
console.log(euclideanSol.solution(10, 4));
