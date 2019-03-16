// https://www.codewars.com/kata/help-the-bookseller/train/javascript

function stockList(listOfArt, listOfCat){
  let shortTempNumber;
  let empty = 0;
  let res = '';
  let countingObject = {};
  let numbers = ['0','1','2','3','4','5','6','7','8','9'];
 
  for(let i = 0; i < listOfCat.length; i++){
    countingObject[listOfCat[i]] = 0;
    for(let j = 0; j < listOfArt.length; j++){
      let tempNumber;
      if(listOfArt[j][0] === listOfCat[i]){
       
        let tempArray = [];

        for(let m = 0; m < listOfArt[j].length; m++){
          
          if(numbers.includes(listOfArt[j][m])){
            
            tempArray.push(parseInt(listOfArt[j][m]))
            let shortTempNumber = tempArray.join("");

            if(shortTempNumber > 0){
              empty = 1;
            }

            if(m === listOfArt[j].length-1){
              countingObject[listOfCat[i]] += parseInt(shortTempNumber);
            }
          }
        }
      }
    }
  }

  const entries = Object.entries(countingObject)
console.log(entries)

for (const [countingObject, count] of entries) {
  res += "(" + countingObject + " " + ':' + ' ' + count + ")" + " - ";

}
res = res.substring(0, res.length - 3);
if(empty > 0){
  return res;
}else{
  return '';
}
}


// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B"]
// res = "(A : 200) - (B : 1140)"
// stockList(b, c);
// res));

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
stockList(b, c);
// res);