arr1 = [1, 2, 1];
arr2 = [4, 4, 1];
function same(arr1, arr2) {
    let isSame = true;
    
    if(arr1.length !== arr2.length) {
        return false;
    }

    for(let value of arr1) {
        const squredValue = value * value;
        arr2.includes(squredValue) ? isSame = true : isSame = false;
        const squaredValueIndex = arr2.indexOf(squredValue);
        arr2.splice(squaredValueIndex, 1);
        if(!isSame) {
            return false;
        }
    }

    return true;
}

console.log(same(arr1, arr2))