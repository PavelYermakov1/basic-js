module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition !== undefined ? options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  let middleResult = '';
  let finalResult = '';
  let i = 1;
  let j = 1;
  while(i < additionRepeatTimes) {
    middleResult = `${middleResult}${addition}${additionSeparator}`
    i++;
  }
  middleResult += addition;
  while(j < repeatTimes) {
    finalResult = `${finalResult}${str}${middleResult}${separator}`
    j++;
  }
  return finalResult += `${str}${middleResult}`
};
  