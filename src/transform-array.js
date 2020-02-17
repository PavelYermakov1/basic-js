module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new Error();
    let acc = [];
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] === '--double-next') {
            if(i < arr.length - 1) {
                acc.push(arr[i + 1]);
            }
        } else if(arr[i] === '--double-prev') {
            if(i > 0) {
                acc.push(arr[i - 1]);
            }
        } else if(arr[i] === '--discard-next') {
            if(i < arr.length - 1) {
                i++;
            }
        } else if(arr[i] === '--discard-prev') {
            if(arr.length > 0) {
                acc.pop();
            }
        } else {
            acc.push(arr[i]);
        }
    }

    return acc;
};
