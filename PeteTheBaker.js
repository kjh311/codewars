// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});


// I know there's a shorter way to do this somehow
function cakes(recipe, available) {

  var flour = Math.floor(available.flour / recipe.flour);
  var sugar = Math.floor(available.sugar / recipe.sugar);
  var eggs = Math.floor(available.eggs / recipe.eggs);
  var milk = Math.floor(available.milk / recipe.milk);
  var oil = Math.floor(available.oil / recipe.oil);
  var apples = Math.floor(available.apples / recipe.apples);
  var crumbles = Math.floor(available.crumbles / recipe.crumbles);
  var pears = Math.floor(available.pears / recipe.pears);
  var butter = Math.floor(available.butter / recipe.butter);
  var chocolate = Math.floor(available.chocolate / recipe.chocolate);
  var nuts = Math.floor(available.nuts / recipe.nuts);
  var cocoa = Math.floor(available.cocoa / recipe.cocoa);
  var cream = Math.floor(available.cream / recipe.cream);


  if(recipe.flour !== undefined && available.flour === undefined || recipe.sugar !== undefined && available.sugar === undefined || recipe.apples !== undefined && available.apples === undefined || recipe.eggs !== undefined && available.eggs === undefined || recipe.milk !== undefined && available.milk === undefined || recipe.oil !== undefined && available.oil === undefined || recipe.crumbles !== undefined && available.crumbles === undefined || recipe.pears !== undefined && available.pears === undefined || recipe.butter !== undefined && available.butter === undefined || recipe.chocolate !== undefined && available.chocolate === undefined || recipe.nuts !== undefined && available.nuts === undefined || recipe.cocoa !== undefined && available.cocoa === undefined || recipe.cream !== undefined && available.cream === undefined){
    console.log('not enough ingredients to make a cake');
    return 0;
  }

  var finalArray = [];
  if(recipe.flour >= 1 && available.flour >= 1 && flour >=1){
    finalArray.push(flour);
  }else if(recipe.flour >= 1 && available.flour >= 1 && flour === 0){
    return 0;
  }
   if(recipe.sugar >= 1 && available.sugar >= 1 && sugar >=1){
    finalArray.push(sugar);
  }else if(recipe.sugar >= 1 && available.sugar >= 1 && sugar === 0){
    return 0;
  }
  if(recipe.eggs >= 1 && available.eggs >= 1 && eggs >=1){
    finalArray.push(eggs);
  }else if(recipe.eggs >= 1 && available.eggs >= 1 && eggs === 0){
    return 0;
  }
  if(recipe.milk >= 1 && available.milk >= 1 && milk >=1){
    finalArray.push(milk);
  }else if(recipe.milk >= 1 && available.milk >= 1 && milk === 0){
    return 0;
  }
  if(recipe.oil >= 1 && available.oil >= 1 && oil >=1){
    finalArray.push(oil);
  }else if(recipe.oil >= 1 && available.oil >= 1 && oil === 0){
    return 0;
  }
  if(recipe.apples >= 1 && available.apples >= 1 && apples >=1){
    finalArray.push(apples);
  }else if(recipe.apples >= 1 && available.apples >= 1 && apples === 0){
    return 0;
  }
  if(recipe.crumbles >= 1 && available.crumbles >= 1 && crumbles >=1){
    finalArray.push(crumbles);
  }else if(recipe.crumbles >= 1 && available.crumbles >= 1 && crumbles === 0){
    return 0;
  }
  if(recipe.pears >= 1 && available.pears >= 1 && pears >=1){
    finalArray.push(pears);
  }else if(recipe.pears >= 1 && available.pears >= 1 && pears === 0){
    return 0;
  }
  if(recipe.butter >= 1 && available.butter >= 1 && butter >=1){
    finalArray.push(butter);
  }else if(recipe.butter >= 1 && available.butter >= 1 && butter === 0){
    return 0;
  }
  if(recipe.chocolate >= 1 && available.chocolate >= 1 && chocolate >=1){
    finalArray.push(chocolate);
  }else if(recipe.chocolate >= 1 && available.chocolate >= 1 && chocolate === 0){
    return 0;
  }
  if(recipe.nuts >= 1 && available.nuts >= 1 && nuts >=1){
    finalArray.push(nuts);
  }else if(recipe.nuts >= 1 && available.nuts >= 1 && nuts === 0){
    return 0;
  }
  if(recipe.cocoa >= 1 && available.cocoa >= 1 && cocoa >=1){
    finalArray.push(cocoa);
  }else if(recipe.cocoa >= 1 && available.cocoa >= 1 && cocoa === 0){
    return 0;
  }
  if(recipe.cream >= 1 && available.cream >= 1 && cream >=1){
    finalArray.push(cream);
  }else if(recipe.cream >= 1 && available.cream >= 1 && cream === 0){
    return 0;
  }

  var largest = Math.min.apply(Math, finalArray);
  return largest;

}

cakes({"apples":3,"flour":300,"sugar":150,"milk":100,"oil":100}, {"sugar":500,"flour":2000,"milk":2000,"apples":15,"oil":20});
