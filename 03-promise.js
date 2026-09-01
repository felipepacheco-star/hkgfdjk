function prepararPedido(){
    return new Promise((resolve, reject)=>{
        console.log("Preparando pedido ......");

        setTimeout(()=>{

            const deuBom = false;
            if(deuBom){
                resolve("Hambúger pronto!");
            }else{
                reject("Deu erro ao preparar o hambúger")
            }

        },3000);
    })
}

prepararPedido()
    .then((resultado)=>{
        console.log(resultado)
    })
    .catch((erro)=>{
        console.log(erro)
    });