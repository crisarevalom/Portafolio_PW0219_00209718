//4
function adivNum(){
    let array=[];
    let num=parseInt(prompt("Adivine el numero entre 1-20"))
    for(let i=0; i<array.length; i++){
        array.push(math.floor(math.random()*20)+1);
    } if(array.indexOf(num)!=-1){
        console.log("Gano");
    } else{
        console.log("Perdio");
    }
}