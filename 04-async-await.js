function prepararPedido(){
    return new Promise((certo)=>{
        setTimeout(()=>{
            certo("Pizza pronta!");
        },3000)
    })
}

async function fazerPedido(){
    console.log("Pedido realizado");

    const pedido = await prepararPedido();

    console.log(pedido);

    console.log("Pedido Entregue");
}

fazerPedido();