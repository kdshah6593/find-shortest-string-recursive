// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.
function findShortestStringRecursive(arr) {
  // type your code here
  if (arr.length === 1) {
    return arr[0];
  }
  
  if (arr[0].length <= arr[1].length) {
    return findShortestStringRecursive(arr.slice(0,1).concat(arr.slice(2)))
  } else {
    return findShortestStringRecursive(arr.slice(1))
  }
}

function findShortestString(arr) {
  // type your code here
  word = ""
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      word = arr[i]
    } else if (arr[i].length < word.length) {
      word = arr[i];
    }
  }
  return word;
}

function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}

console.log('Iterative:', benchmark(() => findShortestString(['flower', 'juniper', 'lily', 'dandelion', 'cat', 'hi', 'dog', 'an'])))
console.log('Recursive:', benchmark(() => findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion', 'cat', 'hi', 'dog', 'an']))) 