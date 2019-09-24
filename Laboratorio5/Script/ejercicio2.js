//2
function sum(array){
    let sum=0;
    let prom=0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
         prom = sum/ array.length;
    }
    console.log(`La suma es: ${sum} y el promedio ${prom}`);
}