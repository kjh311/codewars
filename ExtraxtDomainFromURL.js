// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){

if(url.includes("//") === true){
  url = url.split("//");
  url.shift();
  url = url[0];
}

if(url.includes("www.") === true){
  url = url.split("www.");
  url.shift();
  url = url[0];
}

if(url.includes(".") === true){
  url = url.split(".");
  url.pop();
  url = url[0];
}

return url;
}



domainName("http://google.com");  // "google"
// domainName("http://google.co.jp");  // "google"
// domainName("www.xakep.ru");  // "xakep"
// domainName("https://youtube.com");  // "youtube"
// domainName("http://github.com/carbonfive/raygun");  // "github" 
// domainName("http://www.zombie-bites.com");  // "zombie-bites"
// domainName("https://www.cnet.com");  // "cnet"