// Ejemplo function call back

function sum(a,b){
    return a + b;
}
function calc(a,b, callback){
        return callback(a,b);
};
console.log(calc(2,2, sum));



//settimeOut

setTimeout(() => {
    console.log("Hola Sofi");
}, 2000);



// como callback👇🏻
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'SofiDev');