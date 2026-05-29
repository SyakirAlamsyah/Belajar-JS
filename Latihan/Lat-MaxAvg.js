function maxavg(arr){

    var mavg = 0;
    var arrn = 0;
    var narr = 0;

    
    for(var i = 0; i < arr.length; i++){
        var tot = 0;
        var avg = 0;
        
        for(var j = 0; j < arr[i].length; j++){
            tot += arr[i][j]
        }

        avg = tot/arr[i].length
        arrn += 1
        if (avg > mavg){
            mavg = avg
            narr = arrn
        }
    }
    console.log("Array ke-" + narr + " memiliki rata-rata paling besar")
}

maxavg([
    [10, 3, 5, 7, 5],
    [5, 6, 4, 1, 2],
    [7, 8, 12, 10, 5]
])

maxavg([
    [10, 10, 10, 10, 10],
    [5, 6, 4, 1, 2],
    [7, 8, 12, 10, 5]
])

maxavg([
    [10, 3, 5, 7, 5],
    [10, 100, 4, 1, 2],
    [7, 8, 12, 10, 5]
])


