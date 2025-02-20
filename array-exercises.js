// array-exercises.js

// Exercise 1: Create an array of three colors and print the first color.
    let colorList = ["red", "blue", "yellow"];
    console.log(colorList[0]);

// Exercise 2: Add a color to the end of the array and print the array.
    colorList.push("orange");
    console.log(colorList);

// Exercise 3: Remove the last color from the array and print the array.
    colorList.pop("orange");
    console.log(colorList);

// Exercise 4: Add a color to the beginning of the array and print the array.
    colorList.unshift("pink");
    console.log(colorList);

// Exercise 5: Remove the first color from the array and print the array.
    colorList.shift("pink");
    console.log(colorList);

// Exercise 6: Print the number of colors in the array.
    console.log(colorList.length);

// Exercise 7: Convert the array into a string separated by dashes.
    ["red","blue","yellow"];
    let stringOfColors = colorList.join("-");
    console.log(stringOfColors);

// Exercise 8: Replace the second color with "pink" and print the array.
    colorList[1] = 'pink';
    console.log(colorList);

// Exercise 9: Create an array of numbers and print the third number.
    let arrayOfNumbers = ["1", "2", "3", "4"];
    console.log(arrayOfNumbers[2]);

// Exercise 10: Remove the last element, add two numbers to the beginning, and print the array.
    arrayOfNumbers.pop("4");
    arrayOfNumbers.unshift("0", "5");
    console.log(arrayOfNumbers);

