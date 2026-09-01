function consultaServidor(disponivel){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(disponivel){
                resolve("Dados recebidos.");
            }else{
                reject("Servidor indisponivel");
            }
        },1000)
    })
}

async function executar() {
    console.log("Carregando...");
    try {
        const resultado = await consultaServidor(true);
        console.log(resultado)
    } catch (error) {
        console.log("Erro:", error.message)
    } finally{
        console.log("Carregamento finalizado");
    }
}

executar();