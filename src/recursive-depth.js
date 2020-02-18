module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        } else {
            let count = arr.reduce((acc,cur) => {
                return acc = Math.max(this.calculateDepth(cur), acc)
              }, 0);
            return count + 1;
        }
    }   
};