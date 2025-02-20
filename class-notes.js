//Create an array
let myFavoriteFruits = ["pineapples" , "oranges" , "blueberries" , "strawberries"];

//index is the position of the element in the array
// You cannot use negative indexes to access elements in an array
console.log(myFavoriteFruits[0]);
console.log(myFavoriteFruits.indexOf("blueberries"));

// .indexOf() gets the index of an element in an array
// When you try to find an element that is not in the array, you will get -1 from the indexOf
console.log(myFavoriteFruits.indexOf("guava")); //-1

//Getting the length of array
console.log(myFavoriteFruits.length);


// Adding elements to an array
//.push() adds an element to the end of the array
myFavoriteFruits.push("lemons");
console.log(myFavoriteFruits);

//.unshift() adds an element to the beginning of the array
myFavoriteFruits.unshift("paw paw");
console.log(myFavoriteFruits);



//Removing Elements from an array
//.pop() removes elements at the end of the array, returns a single element
myFavoriteFruits.pop("lemons");
console.log(myFavoriteFruits);

// .shift() removes element at the front of the array, returns the element it removed

myFavoriteFruits.shift("paw paw");
console.log(myFavoriteFruits);

// Turning an array into a string
// .join(", ") converts an array to a string, and joins with commas
// You can pass anything in the join that will show up between the elements of the array
["pineapples","oranges", "blueberries", "strawberries"];
let stringOfFruits = myFavoriteFruits.join(" -");
console.log(stringOfFruits);
