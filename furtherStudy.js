"use strict";


function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }
  return Array.from(result);
}
// > wordsInCommon(['apple', 'berry', 'banana'], ['apple', 'berry', 'cucmber'])
// [ 'apple', 'berry' ]



function kidsGame(names) {
  const output = [names.shift()];
  let firstLetterToWords = {};

  for (const name of names) {
    const firstChar = name[0];
    if (!firstLetterToWords[firstChar]) {
      firstLetterToWords[firstChar] = [name];
    } else {
      firstLetterToWords[firstChar].push(name);
    }
  }

  while (true) {
    const lastWord = output[output.length - 1];
    const lastWordChar = lastWord[lastWord.length - 1];

    if (firstLetterToWords[lastWordChar] === undefined || firstLetterToWords[lastWordChar].length === 0) {
      break;
    }
    const word = firstLetterToWords[lastWordChar].shift();
    output.push(word)
  }
  return output
}
> console.log(kidsGame(["apple", "berry", "cherry"]))
[ 'apple' ]
> console.log(kidsGame(["noon", "naan", "nun"]))
[ 'noon', 'naan', 'nun' ]
> console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]))
[ 'bagon', 'nosepass', 'starly', 'yamask', 'kalob', 'baltoy' ]