// The Road-Kill Detective

// https://www.codewars.com/kata/the-road-kill-detective/train/javascript

// My name is State Trooper Mark ("skidmark") McDingle.

// My job is maintaining 117 miles of the Interstate, keeping it clean and clear of dead varmints.

// It is a serious job and I take my job seriously.

// I am the Road-Kill Detective



// Every time I find some dead critter I scrape it up and record what type it was in my dead-critter notebook.

// Mostly I just cruise up and down the interstate and only find a few racoons or the occasional squirrel...

// But recently the road-kill has become much more exotic.

// There must be some illegal private zoo back in the woods with major security problem.

// But that's none of my business... Anything beyond the fog-line is out of my jurisdiction.

// Evidence

// Here are some photos of what I came across last week:

// There was a thing that looked like a hyena

// ==========h===yyyyyy===eeee=n==a========
// a long black and white smudge that probably once was a penguin

// ======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n=
// and an unlucky bear that was hit going the other direction

// =====r=rrr=rra=====eee======bb====b=======
// Kata Task

// Even for a professional like me, the identification of flattened exotic animals is not always easy!

// If it ever happens that I can't find all of the remains, or if there are gaps or other parts that I don't recognise, then I record it as ?? in my dead-critter notebook.

// What I really need is a program that I can scan my photos into which can give back the correct answer straight away.

// Something like this:

// Input

// photo (not null)
// Output

// the detected animal name, or ?? if unknown^
// ^ Note: An array/list of all "known" animals is preloaded in a variable called ANIMALS (refer to the initial solution)


var roadKill = function(photo) {
  
  var animals = [ 
  'aardvark',
  'alligator',
  'armadillo',
  'antelope',
  'baboon',
  'bear',
  'bobcat',
  'butterfly',
  'cat',
  'camel',
  'cow',
  'chameleon',
  'dog',
  'dolphin',
  'duck',
  'dragonfly',
  'eagle',
  'elephant',
  'emu',
  'echidna',
  'fish',
  'frog',
  'flamingo',
  'fox',
  'goat',
  'giraffe',
  'gibbon',
  'gecko',
  'hyena',
  'hippopotamus',
  'horse',
  'hamster',
  'insect',
  'impala',
  'iguana',
  'ibis',
  'jackal',
  'jaguar',
  'jellyfish',
  'kangaroo',
  'kiwi',
  'koala',
  'killerwhale',
  'lemur',
  'leopard',
  'llama',
  'lion',
  'monkey',
  'mouse',
  'moose',
  'meercat',
  'numbat',
  'newt',
  'ostrich',
  'otter',
  'octopus',
  'orangutan',
  'penguin',
  'panther',
  'parrot',
  'pig',
  'quail',
  'quokka',
  'quoll',
  'rat',
  'rhinoceros',
  'racoon',
  'reindeer',
  'rabbit',
  'snake',
  'squirrel',
  'sheep',
  'seal',
  'turtle',
  'tiger',
  'turkey',
  'tapir',
  'unicorn',
  'vampirebat',
  'vulture',
  'wombat',
  'walrus',
  'wildebeast',
  'wallaby',
  'yak',
  'zebra' ];

var animalArray = [];
var possibleAnimals = [];
var answer = [];
var finalAnswer = [];

for(i=0; i< photo.length; i++){
  if(photo.charAt(i) !== "="){
    animalArray.push(photo[i]);
  }
}

for(j=0; j<animals.length; j++){
  if(animals[j].charAt(0) === animalArray[0] || animals[j].charAt(0) === animalArray[animalArray.length -1]){
    possibleAnimals.push(animals[j]);
  }
}

for(h=0; h<possibleAnimals.length; h++){
  
  for(m=0; m<possibleAnimals[h].length; m++){
    if(animalArray.includes(possibleAnimals[h].charAt(m))){
      answer.push(possibleAnimals[h]);
    }
  }
}


    answer.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < answer.length; i++) {
        if (answer[i] != current) {
            if (cnt > 0) {
                if(current.length === cnt){
                  finalAnswer.push(current);
                }
            }
            current = answer[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        if(current.length === cnt){
                  finalAnswer.push(current);
                }
    }
    console.log(finalAnswer);
    
for(e=0;e<finalAnswer.length;e++){
  for(r=0;r<animalArray.length;r++){
    if(finalAnswer[e].includes(animalArray[r]) === false){
      finalAnswer.splice(e, 1, "");
    }
  }
}

if(finalAnswer[0] !== undefined){
  

var arr = finalAnswer[0].split("");
var arr1 = [];
for(var i = 0; i < arr.length; i ++) {
  for(var j = i+1; j < arr.length; j ++) {
  if(arr[i] === arr[j]) arr1.push(arr[i]);
  }
}
console.log(arr1);

var arr2 = [];
for(var i = 0; i < animalArray.length; i ++) {
  for(var j = i+1; j < animalArray.length; j ++) {
  if(animalArray[i] === animalArray[j]) arr2.push(animalArray[i]);
  }
}
console.log(arr2);

for(i=0;i<arr1.length;i++){
    if(arr2.includes(arr1[i]) === false){
      console.log(arr1[i] + " is not here!");
      return "??"
    }
}
}



if(finalAnswer[0] !== undefined && finalAnswer[0] !== ""  && finalAnswer.length !== 0){
  for(b=0;b<animalArray.length;b++){
  if(finalAnswer[0].includes(animalArray[b]) === false){
    return "??";
  }
  else{
    return finalAnswer[0];
  }
}
}

if(finalAnswer[1] !== undefined && finalAnswer[1] !== ""  && finalAnswer.length !== 0){
  for(b=0;b<animalArray.length;b++){
  if(finalAnswer[1].includes(animalArray[b]) === false){
    return "??";
  }
  else{
    return finalAnswer[1];
  }
}
}

if(finalAnswer[2] !== undefined && finalAnswer[2] !== ""  && finalAnswer.length !== 0){
  for(b=0;b<animalArray.length;b++){
  if(finalAnswer[2].includes(animalArray[b]) === false){
    return "??";
  }
  else{
    return finalAnswer[2];
  }
}
}

if(finalAnswer[0] !==  undefined && finalAnswer.length !== 0 && finalAnswer[0] !== ""){
  return finalAnswer[0];
}else{
  return "??"
}
}




// roadKill("=======a==aa=a==li=g=a===t===o===r=r=r=r=r"); //"??" **

// roadKill("======es=s==u===o==o=m==m====="); //mouse

roadKill("bbaaaaaaa=bo=on"); //baboon

// roadKill("========d=dr===ra==a===g=o=o==onn==f==f=f==l=yy==y====="); //"dragonfly" **

// roadKill("===c=hh==h===aa=a=m=m=e=ee==l=e=ee=e===o=oo==nn==nn====="); //"chameleon" 

// roadKill("=======f===o====x=====y"); //"??"

// roadKill("==========h===yyyyyy===eeee=n==a========"); // "hyena");

// roadKill("======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n="); // "penguin");

// roadKill("=====r=rrr=rra=====eee======bb====b======="); // "bear");

