function prime(angka){

    var fact = 0
    for(var i = 1; i <= angka; i++){
        if(angka % i == 0){
            fact += 1
        }
    }
    if (fact == 2){
        return true
    }
    else {
        return false
    }

}

console.log(prime(2))
console.log(prime(10))
console.log(prime(5))
console.log(prime(23))
console.log(prime(47))
console.log(prime(33))
console.log(prime(111))
