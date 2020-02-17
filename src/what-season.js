module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.keys(date).length > 0) {
    throw new Error();
  }

  if(date.getMonth() >= 2 && date.getMonth() < 5) {
    return 'spring';
  } else if(date.getMonth() >= 5 && date.getMonth() < 8) {
    return 'summer';
  } else if(date.getMonth() >= 8 && date.getMonth() < 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
};
