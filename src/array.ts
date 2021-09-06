type NumberObj = { valor: number; ocorrencias: number };
type ArrNumObj = Array<NumberObj>;

class ArraySolution {
  verifyNumberInArray(num: number, arr: Array<NumberObj>): boolean {
    for (let j in arr) {
      if (arr[j].valor === num) {
        return true;
      }
    }
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
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        arrObj.push({ valor: arr[i], ocorrencias: 0 });
      } else {
        if (!this.verifyNumberInArray(arr[i], arrObj)) {
          arrObj.push({ valor: arr[i], ocorrencias: 0 });
        }
      }
    }
    for (let j in arrObj) {
      for (let i = 0; i < arr.length; i++) {
        if (arrObj[j].valor === arr[i]) {
          arrObj[j].ocorrencias += 1;
        }
      }
    }
    return this.checkOcurencies(arrObj);
  }
}
let arraySol: ArraySolution = new ArraySolution();
console.log(arraySol.solution([9, 3, 9, 3, 9, 7, 9]));
