var murid = [
    [1, "Vincent", 2.0],
    [2, "Syakir", 3.95],
    [3, "Raihan", 3.98]
]


for (var i = 0; i < 3; i++){
    var check = "";
    var temp = "";
    if (murid[i][2] >= 3.00){
        check = "Lulus";
        murid[i].push(check);
    }else {
        check = "Gagal";
        murid[i].push(check);
    }
    for (var j = 0; j < 4; j++){
        temp += murid[i][j];
        if (j < 1){
            temp += ". "
        } else if (j == 1) {
            temp += ", IPK = "
        } else if (j == 3){
            temp += "."
        }
        else {
            temp += ", "
        }
    } console.log(temp);
}



