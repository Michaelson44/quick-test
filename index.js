// 1.. Define what yoou understand by an array ;

// arrays are like lists, that can or hold up multiple values stored in a single variable ;
// arrays are zero indexing in javascript, this means it starts counting from zero ;
// arrays are object type in javascript ;

// 2 LIST AT LEAST 5 ARRAY METHODS ;
// .find : .. can be used to find any item in an array
// .indexOf : .. can be used to get index of an element in an array
// .splice : .. can be used to delete elements in an array
// .reduce : .. can be used to reduce an array to a single value
// .includes : .. can be used to check if an item exists in an array

// DUMMY DATA AND APPLY METHODS LISTED ABOVE

const vowels = ['a','e','i','o','u'];

// find method
const vowelToFind = 'e';
const foundVowel = vowels.find(vowel => vowel === vowelToFind);
console.log(foundVowel);

// indexOf method
const index = vowels.indexOf('e');
console.log(index);

// splice method
const i = vowels.indexOf('e');
const deleted = vowels.splice(i, 1);
console.log(deleted);

// reduce method
const joined = vowels.reduce((a,b) => a + b);
console.log(joined);

// includes 
const vowelToCheck = 'e';
if (vowels.includes(vowelToCheck)) {
    console.log(`The vowel ${vowelToCheck} is present in array`);
} else {
    console.log(`Whoops.. string not considered a vowel in array`);
};