// You are given an input string.

 //For each symbol in the string if it's the first character occurence, 
 //replace it with a '1', else replace it with the amount of times you've
 // already seen it...

 // But will your code be performant enough
 // Examples

 // input   =  Hello, World!
 // result  =  1112111121311

 // input   =  aaaaaaaaaaaa
 // result  =  123456789101112


 function occurence(string) {
    var acc = 0;
    var result = "1";
    var str = string.slice(0,1);
    var arr = string.split('')
    
  
      for(var i = 1; i< arr.length; i++) {
        if(str.includes(arr[i])) {
            str=str+string.slice(i,i+1)
            acc = acc + 1;
            result = result + acc +""
    }
    else{
      str=str+string.slice(i,i+1)
            acc = acc;
            result = result +"1"

    }
      }
         
  
  return Number(result)
}
 