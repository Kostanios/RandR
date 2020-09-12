function calculateCurrentRating(ratingObj) {
  let currentRating = 0;
  let categoryNumber = 0;
  for (let category in ratingObj) {
    currentRating += ratingObj[category];
    categoryNumber++;
  }
  return currentRating / categoryNumber.toFixed(1);
}

export default calculateCurrentRating;
