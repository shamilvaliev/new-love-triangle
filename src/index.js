/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let resultCount = 0;
  if (preferences.length < 3) {
    return 0;
  }

  for (let i = 0; i <preferences.length; i++) {
    let loversTarget =  preferences[preferences[preferences[i] -1] -1];
    let pair = loversTarget === i+1;
    let currNotSelf = preferences[i] !== i+1;
    if (pair && currNotSelf) {
      resultCount++;
    }
  }
  return resultCount /3;
};
