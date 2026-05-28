// var items = [
//     ["Asus", "laptop", 7500000],
//     ["Samsung", "Phone", 5000000],
//     ["Asus", "laptop", 1250000],
// ]

// function artoobj (arr){
//     var result = [];
    

//     for(var i = 0; i < arr.length; i++){
//         var obj = {};
//         for(var j = 0; j < arr[0].length; j++){
//             if(j == 0){
//                 obj.name = arr[i][j]
//             }
//             if (j == 1){ 
//                 obj.type = arr[i][j]
//             }else{
//                 obj.price = arr[i][j]
//             }

//         }
//         result.push(obj);
//     }
//     return result;
// }

// console.log(artoobj(items))

//Latihan Array of Object
var siswa = [
    ["Syakir", "A", 95],
    ["Erik", "B", 90],
    ["Kristo", "A", 89],
    ["Harits", "B", 93],
]

function gclass(arr){
    var result = []
    var kelA = {
        class: "A",
        siswa: [],
        nilai: []
    }
    var kelB = {
        class: "B",
        siswa: [],
        nilai: []
    }

    for(var i = 0; i < arr.length; i++){
        if(arr[i][1] == "A"){
            kelA.siswa.push(arr[i][0])
            kelA.nilai.push(arr[i][2])
        }
        if(arr[i][1] == "B"){
            kelB.siswa.push(arr[i][0])
            kelB.nilai.push(arr[i][2])
        }
        
    }
    result.push(kelA)
    result.push(kelB)

    return result
}

console.log(gclass(siswa))