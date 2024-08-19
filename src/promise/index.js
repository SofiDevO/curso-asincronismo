// Una promesa tiene 3 estados: pendiente, cumplido, rechazado.

const promise = new Promise((resolve, reject)=>{
    resolve('hey!');
});


const cows = 15;

const countcows = new Promise((resolve, reject)=>{
    if (cows > 10 ) {
        resolve(`We have ${cows} in the farma` );
    }else{
        reject('There is not enough cows');
    }
})



countcows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log('Finally'));