const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'string' || isNaN(parseFloat(sampleActivity)) || Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  } else {
    return Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD)));
  }
};
