// You are given an input string.

 //For each symbol in the string if it's the first character occurence, replace it with a '1',
 // else replace it with the amount of times you've already seen it...

 // But will your code be performant enough
 // Examples

 // input   =  Hello, World!
 // result  =  1112111121311

 // input   =  aaaaaaaaaaaa
 // result  =  123456789101112
 function countOccurance(string){
    var countingArray=[];
    var characterToCompare="";
    var counter = 1

    for ( var i=0 ; i< string.length; i++ ){
         counter=1;
         characterToCompare=string[i]     
        for (var j=0 ; j < string.length; j++){
            if( countingArray[j] !== "" && characterToCompare === string[j]){
                countingArray[j] = counter;
                counter += 1
            }           
        }
    }
    return countingArray.join('')
 }