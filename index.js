function buildHistogram(arr){
  let histogram = {};

  arr.forEach(char => {
    histogram[char] ? histogram[char] += 1 : histogram[char] = 1;
  });

  return histogram;
}

function canBuildNote(magazine, note){
  let histogram = buildHistogram(magazine);
  let canBuild = true;

  note.split("").forEach(char => {
    if (histogram[char]) {
      histogram[char]--;
    } else {
      canBuild = false;
    } 
  });

  return canBuild;
}

// { "a": 1 }, { "c": 2 }, { "e": 6 }, { "h": 2 }, { "i": 1 }, { "l": 1 }, 
// { "m": 1 }, { "n": 1 }, { "o": 2 }, { "r": 2 }, { "s": 2 }, 
// { "t": 2 }