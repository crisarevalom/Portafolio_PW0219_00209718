function type(list){
    let contbool=0;
    let contnum=0;
    let contobj=0;
    let contstrn=0;

    list.forEach(element => {
            console.log(typeof element)
            switch(typeof element){

                case'boolean': contbool++;
                break;

                case 'number': contnum++;
                    break;

                case 'object': contobj++;
                    break;

                case 'string': contstrn++;
                    break;
            }
    
        });

        console.log(`Resultados: Boolean: ${contbool} Number: ${contnum} Object: ${contobj} String ${contstrn}`)
}