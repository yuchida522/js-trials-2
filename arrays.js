"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${i}. ${items[i]}`);
}}
// > printIndices(['apple', 'berry', 'banana', 'smoothie'])
// 0. apple
// 1. berry
// 2. banana
// 3. smoothie



// 2. everyOtherItem
function everyOtherItem(items) {
  let result = []
  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  console.log(result)
}
// > everyOtherItem(['apple', 'berry', 'banana', 'smoothie'])
// [ 'apple', 'banana' ]



// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort(function(a, b) {
    return a - b;  
});
  let nItems = items.slice(0, n);
  console.log(nItems);
}

// > smallestNItems([4, 5, 10, 423, 20], 4)
// [ 4, 5, 10, 20 ]