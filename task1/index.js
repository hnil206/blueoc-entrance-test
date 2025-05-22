function lengthFrequency(strings) {
  if (!strings || strings.length === 0) return [];

  const lengthCount = {};
  let maxFreq = 0;

  for (const str of strings) {
    const strLength = str.length;
    if (lengthCount[strLength] === undefined) {
      lengthCount[strLength] = 1;
    } else {
      lengthCount[strLength] += 1;
    }
    
    if (lengthCount[strLength] > maxFreq) {
      maxFreq = lengthCount[strLength];
    }
  }

  return strings.filter((str) => lengthCount[str.length] === maxFreq);
}

// Test case
const input = ["a", "ab", "abc", "cd", "def", "gh"];
console.log("Input:", input);
console.log("=======================================");
console.log("Output:", lengthFrequency(input));
