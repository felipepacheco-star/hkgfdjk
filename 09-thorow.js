async function cadastroUsuario(nome, idade) {
    try {
        if(!nome){
            throw new Error("O nome e obrigatorio");
        }

        if (idade < 18){
            throw new Error("O usuario precisa ter 18 anos ou mais");
        }
        console.log("Usuario cadastrado com sucesso!");
        console.log("Nome:", nome);
        console.log("Idade:", idade);

    }catch(e){
        console.log("Erro no cadastro: ", e.message)
    }
}

cadastroUsuario("Matheus", 17);