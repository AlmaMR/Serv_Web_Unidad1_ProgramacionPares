function resolver() {
    
}


let promesa = new Promise(function (resolve, reject) {

    setTimeout(() => {
        resolve("Promesa Resuelta!");
    }, 2000);

});

console.log(promesa);