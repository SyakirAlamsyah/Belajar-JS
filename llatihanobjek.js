//Latihan Object

// var obb = {
//     name: "sakir",
//     gpa: 3.95
// }

// console.log(obb)

//Method and Key
// var data = {
//     //key = Variabel dalam objek
//     name: "Sakir",
//     gpa: 3.95,

//     //Method = Fungsi dalam objek
//     cek : function(){
//         if (gpa >= 3){
//             console.log(name + "Lulus")
//         } else {
//             console.log(name + "Ngulang")
//         }
//     }
// }

//Initiating an Object from function

// function arrtoobj(arr){
//     var result = {}

//     result.name = arr[0]
//     result.gpa = arr[1]

//     return result
// }

// console.log(arrtoobj(["Syakir", 3.95]))

//Latihan
var profile = {
    nama: "Caca",
    berat: 45,
    tinggi: 155,
    hobby: ["nonton", "makan"],

    hobi : function(){
        console.log("Hobby " + this.nama + ":")
        for(var i = 1; i <= this.hobby.length; i++){
            console.log(i + ". " + this.hobby[i-1])
        }
    }
}

profile.hobi()
