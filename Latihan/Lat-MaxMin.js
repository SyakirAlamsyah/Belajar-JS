function maxmin(arr){

    var result = {
        max : arr[0],
        min : arr[0]
    }

    for(var i=0; i < arr.length; i++){
        
        if(arr[i] > result.max){
            result.max = arr[i]
        }
        if (arr[i] < result.min){
            result.min = arr[i]
        }   
    }

    return result
}

console.log(maxmin([10, 3, 5, 12, 7]))
console.log(maxmin([1, 3, 5, 7, 13]))