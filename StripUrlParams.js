// Strip Url Params

// Complete the method so that it does the following:

// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 2nd argument (optional array)
// Examples:

// stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'

function stripUrlParams(url, paramsToStrip){

  if(paramsToStrip !== undefined){
    var strip = paramsToStrip[0];
  }
  
  var screenedUrl = url.split("?");
  var baseUrl = screenedUrl[0];
  
  if(screenedUrl[1] === undefined){
    var queriesInUrl = '';
    var arrayOfQueries = queriesInUrl.split("?");
  }else{
      var queriesInUrl = screenedUrl[1];
      var arrayOfQueries = queriesInUrl.split("&");
      console.log("Queries in URL is " + queriesInUrl);
      console.log("arrayOfQueries is " + arrayOfQueries);
  }

  var tempArray = [];
  var tempArray2 = [];
  var tempArray3 = [];
  var tempString2 = "";
  var tempString3 = "";
  var tempString;
  
  for(i = 0; i < arrayOfQueries.length; i++){
    tempArray.push(arrayOfQueries[i]);
    tempString = tempArray[i].split("=");
    
    if(tempArray2.includes(tempString[0]) === false && tempString[0] !== strip){
      tempArray2.push(tempString[0]);
      tempArray3.push(arrayOfQueries[i]);
      tempString2 += tempArray[i] + "&";
      tempString3 = tempString2.substring(0, tempString2.length - 1);
    }
  }
  
  if(screenedUrl[1] === undefined){
     return baseUrl + tempString3;
  }else{
    return baseUrl + "?" + tempString3;
  }
}



// stripUrlParams('www.codewars.com?a=1&b=2&a=2'); // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'

stripUrlParams('www.codewars.com?a=1&b=2&a=2'); // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'