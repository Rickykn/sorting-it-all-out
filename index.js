var readlineSync = require("readline-sync");

let currentArray = [29, 23, 19, 17, 13, 11, 7, 5, 3, 2];

function print() {
  console.log(currentArray);
}

do {
  var input = readlineSync.question("Your Input Type: ");
  if (input === "print") {
    print();
  } else if (input === "sort") {
    const sortedArr = currentArray.sort((a, b) => {
      return a - b;
    });
    console.log(sortedArr);
  } else if (input === "average") {
    const total = currentArray.reduce((curr, prev) => {
      return curr + prev;
    });
    console.log(total / currentArray.length);
  } else if (input === "push") {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    currentArray.push(randomNumber);
    console.log(currentArray);
  } else if (input === "pop") {
    currentArray.pop();
    console.log(currentArray);
  } else if (input === "new") {
    let newArr = [];
    for (let i = 0; i < currentArray.length; i++) {
      const randomNumber = Math.floor(Math.random() * 100 + 1);
      newArr.push(randomNumber);
    }
    currentArray = [...newArr];
    console.log(currentArray);
  } else if (input === "reverse") {
    currentArray.reverse();
    console.log(currentArray);
  } else if (input === "biggies") {
    let max = 0;
    for (let i = 0; i < currentArray.length; i++) {
      if (currentArray[i] > max) {
        max = currentArray[i];
      }
    }
    console.log(max);
  } else if (input === "extremes") {
    let max = Math.max.apply(Math, currentArray);
    let min = Math.min.apply(Math, currentArray);
    console.log(`${max} is the largest element in the array`);
    console.log(`${min} is the smallest element in the array`);
  } else if (input === "median") {
    const mid = Math.floor(currentArray.length / 2),
      nums = [...currentArray].sort((a, b) => a - b);
    const result =
      currentArray.length % 2 !== 0
        ? nums[mid]
        : (nums[mid - 1] + nums[mid]) / 2;
    console.log(result);
  } else {
    console.log("not a valid choice");
    return;
  }
} while (input !== "quit");
