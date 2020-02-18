const chainMaker = {
  range: new Array(),
  getLength() {
    return this.range.length;
  },
  addLink(value) {
     this.range.push(value);
     return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position - 1  < 0 || position - 1  >= this.getLength()) {
      this.range = new Array();
      throw new Error();
  } else {
    this.range.splice(position - 1, 1);
    return this;
  }
  },
  reverseChain() {
     this.range.reverse();
     return this;
  },
  finishChain() {
    const value =  this.range.reduce((acc,cur,i) => {
      if(i >= 0 && i < this.getLength() - 1) {
        acc += `( ${cur} )~~`;
        return acc;
      } else {
        acc += `( ${cur} )`;
        return acc;
      }
    },'');
    this.range = new Array();
    return value;
    
    
  }
};

module.exports = chainMaker;
