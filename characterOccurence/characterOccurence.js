// You are given an input string.

 //For each symbol in the string if it's the first character occurence,
 // replace it with a '1', else replace it with the amount of times you've
 // already seen it...

 // But will your code be performant enough
 // Examples

 // input   =  Hello, World!
 // result  =  1112111121311

 // input   =  aaaaaaaaaaaa
 // result  =  123456789101112

function charOccurence(str) {
	let occurence_arr = new Array(256).fill(0);
	let res = new Array(str.length);
	for (var i=0; i<str.length; i++) {
		let char = str.charCodeAt(i);
		occurence_arr[char - 1]++;
		if (char > 96 && char < 123 || char > 64 && char < 91) {
			if (char < 91) {
				res[i] = occurence_arr[char - 1] + occurence_arr[char + 31];
			} else {
				res[i] = occurence_arr[char - 1] + occurence_arr[char - 33];
			}
		} else {
			res[i] = occurence_arr[char - 1];
		}
	}
	return res.join('');
}