function panjang(str){
    return str.length
}

function check(pass){
    var temp = panjang(pass)
    if(temp >= 5 && temp <= 12){
        console.log("Kata sandi diterima")
    } else{
        console.log("Panjang Karakter harus diantara 5 sampai 12")
    }
}


check("halo nama sa")
check("sakir")
check("1234")
check("9999999999999999999999999999999")
