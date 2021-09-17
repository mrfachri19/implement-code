
const divideAndSort = function (number) {
    if (typeof (number) === 'number'){
     let ubahNumber = number.toString().split(0)
     let ubahnumber2 = ubahNumber.map((x) => x.split("").sort().join("")).join("")
     return parseInt(ubahnumber2)
    } else {
      return 'data bukan number';
    }
    
  }
  
  console.log(divideAndSort(5956560159466056));