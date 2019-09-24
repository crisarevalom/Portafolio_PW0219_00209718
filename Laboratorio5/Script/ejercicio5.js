//5
function palindromo(palabra){

    let palabraPal='';
    palabra=palabra.toLowerCase();

    palabraPal=palabra.split("").reverse().toString();

    for(let i=0; i<((palabraPal.length)-1); i++){
        palabraPal=palabraPal.replace(",", "")
    }
    if(palabra==palabraPal){
        console.log("Es palindromo")
    } else{
        console.log("NO es palindromo")
    }

}