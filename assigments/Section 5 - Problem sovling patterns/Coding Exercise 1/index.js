function validAnagram(string1, string2){
    // add whatever parameters you deem necessary - good luck!
    // create two frequrcy counter objects
    if(string1 === string2) { return true; }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    // fill it with first and second string
    for(let value of string1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    }

    for(let value of string2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
        
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }

    }

    return true;


  
    // compare each element value of first object to it's corresponding element value it the second object
    
  }

console.log(validAnagram(' ', ' '));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram("rat","car"));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));