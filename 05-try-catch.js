function buscaProduto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nome: "Notebook", preco: 3500 });
            } else {
                reject(new Error("Produto não encontrado"));
            }
        }, 3000)
    });
}
async function executar() {
    try{
        const produto = await buscaProduto(1);
        console.log("Produto encontrado.");
        console.log(produto);
    }catch(erro){
        console.log("Ocorreu um erro");
        console.log(erro.message)
    }
}

executar();