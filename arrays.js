//Find the last element of the following arrays.
 let arr1 = [3,7,34,90,12]
let arr2 = [true, "green", "where",12,56];

console.log(arr1[arr1.length -1 ]);
console.log(arr2[arr2.length -1 ]);


//Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Python", "Snake", "Dog"];
let pet = myPets.join();
console.log(pet);

//Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());


//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let thisArr= arr.filter((item,index) =>{
    return arr.indexOf(item)=== index;
});
console.log(thisArr)

let duplicateArr= arr.filter((item,index) =>{
    return arr.indexOf(item)!== index;
});
console.log(duplicateArr)


//Write a JS script to search for the following word in the array.
//4
//If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4, 23];
arr5Search= arr5.indexOf(4);

if (arr5Search == (4)){
    console.log(4);
}else {
    console.log("the search word was not found")
}


//Write a JS script to sort the following string
let word = "lufituaeb"
let newword = (word) => {
    return word.split("").sort().join("");
  };
  console.log(newword(word))




