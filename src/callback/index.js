// Ejemplo function call back

function sum(a,b){
    return a + b;
}
function calc(a,b, callback){
        return callback(a,b);
};
console.log(calc(2,2, sum));



//