function countUniqueValues(arr){
    // create pointer one at the first element
    let pointer1 = 0;
    // create pointer two at the second element
    let pointer2 = 1;

    if(!arr.length) {
        return pointer1;
    }

    // compare arr[pointer1] === arr[pointer2]
    while(pointer2 < arr.length) {

    // if equal => incerement pointer two by 1
        if(arr[pointer1] === arr[pointer2]) {
        
            pointer2++;
        
        } else {
            // if not equal => 
            
            // 1. pointer1++ 
            pointer1++;
            
            //2. arr[pointer1] =  arr[pointer2]
            arr[pointer1] = arr[pointer2];
            
            // 3. pointer2++
            pointer2++
        }
    }

    return ++pointer1;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1]));
