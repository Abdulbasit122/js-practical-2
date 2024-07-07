// Assignment 1
let array1 = [1, 2, 3, 4, 5];

// Remove the first two elements
array1.splice(0, 2);

// Add three new elements to the end
array1.push(6, 7, 8);

// Print the new array using a for loop
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

// Assignment 2
let array2 = [1, 2, 3, 4, 5];

// Use a for loop to iterate over the array and print indices of even numbers
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) {
    console.log(i);
  }
}

// Assignment 3
let array3 = [3, 4, 5];

// Add two new elements to the beginning
array3.unshift(1, 2);

// Remove the last element
array3.pop();

// Print the new array using a for loop
for (let i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}

// Assignment 4
let array4 = [1, 2, 3, 4, 5];

// Use a for loop to iterate over the array and print elements greater than the previous element
for (let i = 1; i < array4.length; i++) {
  if (array4[i] > array4[i - 1]) {
    console.log(array4[i]);
  }
}

// Assignment 5
let array5 = [1, 2, 3, 4, 5];

// Find the index of the element 3
let index = array5.indexOf(3);

// Remove all elements starting from that index
array5.splice(index);

// Print the new array using a for loop
for (let i = 0; i < array5.length; i++) {
  console.log(array5[i]);
}
