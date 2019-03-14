// https://www.codewars.com/kata/simple-transposition/train/javascript
// https://repl.it/@kjh311/Simple-transposition

function simpleTransposition(text) {

  let firstRow = [];
  let secondRow = [];
  let finalText = '';
  let counter = 0;

  for(let i = 0; i < text.length; i++){
    if(counter % 2 === 0){
      firstRow.push(text[i])
    }else{
      secondRow.push(text[i])
    }
    counter ++;
  }

  for(let j = 0; j < firstRow.length; j++){
    finalText += firstRow[j];
  }

  for(let k = 0; k < secondRow.length; k++){
    finalText += secondRow[k];
  }

  return finalText;
}


  //  simpleTransposition("Sample text")
   // "Sml etapetx")

  //  simpleTransposition("Simple transposition")
   // "Sml rnpstoipetasoiin")

  //  simpleTransposition("All that glitters is not gold")
   // "Alta ltesi o odl htgitr sntgl")

  //  simpleTransposition("The better part of valor is discretion")
   // "Tebte ato ao sdsrtoh etrpr fvlri icein")

  //  simpleTransposition("Conscience does make cowards of us all")
   // "Cncec osmk oad fu losinede aecwrso sal")

   simpleTransposition("Imagination is more important than knowledge")
   // "Iaiaini oeipratta nwegmgnto smr motn hnkolde")