//7
function fib(num){
    let a=0, b=1, c, d=1;
    console.log(a);
    console.log(b);
    for(i=3;i<=num;i++){
        c=a+b;
        console.log(c);
        d=d + c;
        a=b;
        b=c;
    }
}