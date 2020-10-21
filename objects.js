"use strict";


// 1. countWords
function countWords(phrase) {
  const wordCount = {};
  const words = phrase.split(' ');

  for (const w of words) {
    if (wordCount[w]) {
      wordCount[w] += 1;
    } else {
      wordCount[w] = 1;
    }
}
return wordCount;
}
// > countWords('hello hello this is a test')
// { hello: 2, this: 1, is: 1, a: 1, test: 1 }

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
}
  if (!price in melonPrices) {
    return
  }
  return melonPrices[price];
}

// > getMelonsAtPrice(2.50)
// [ 'Cantaloupe', 'Honeydew' ]
// > getMelonsAtPrice(4)
// undefined
// > 