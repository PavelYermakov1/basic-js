module.exports = function countCats( matrix ) {
  return [].concat(...matrix).reduce((acc,cur) => (cur == '^^') ? acc + 1 : acc, 0); 
};
