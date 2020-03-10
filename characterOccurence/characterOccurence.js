// You are given an input string.

 //For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

 // But will your code be performant enough
 // Examples

 // input   =  Hello, World!
 // result  =  1112111121311

 // input   =  aaaaaaaaaaaa
 // result  =  123456789101112

 function occurence (str) { 
    var result={}; 
    var occ = ""
    for (var i =0 ; i<str.length ; i++){ 
    var char = str[i]; 
    if (result[char] === undefined) { 
      result[char]=1 ; 
      occ=occ+result[char] ;   
    } else { result[char]= result [char]+1
     occ=occ+result[char] ;
    }  
    }
   return occ ;
    }