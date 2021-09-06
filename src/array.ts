type NumberObj = { valor: number; ocorrencias: number };
type ArrNumObj = Array<NumberObj>;

class ArraySolution {
  verifyNumberInArray(num: number, arr: Array<NumberObj>): boolean {
    arr.map((j) => {
      if (j.valor === num) {
        return true;
      }
    });

    return false;
  }

  checkOcurencies(Objarr: ArrNumObj) {
    for (let i in Objarr) {
      if (Objarr[i].ocorrencias % 2 !== 0) {
        return Objarr[i].valor;
      }
    }
  }

  solution(arr: Array<number>) {
    let arrObj: ArrNumObj = [];

    arr.map((i) => {
      if (i === 0) {
        arrObj.push({ valor: i, ocorrencias: 0 });
      } else {
        if (!this.verifyNumberInArray(i, arrObj)) {
          arrObj.push({ valor: i, ocorrencias: 0 });
        }
      }
    });

    arrObj.map((item) => {
      const ocurrencyNum: number = arr.filter((x) => item.valor === x).length;
      item.ocorrencias = ocurrencyNum;
    });

    return this.checkOcurencies(arrObj);
  }
}
let arraySol: ArraySolution = new ArraySolution();
console.log(arraySol.solution([9, 3, 9, 3, 9, 7, 9]));
