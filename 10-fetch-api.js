async function buscarUsuario(id) {
    try {
        console.log("Buscando usuário na API.....");
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/user/${id}`);
        if(!resposta){
            throw new Error(`Erro http: , ${resposta.status}`)
        }
        const usuario = await resposta.json();

        console.log("Usuario encontrado:");
        console.log("Nome: ", usuario.nome);
        console.log("E-mail: ", usuario.email);
        console.log("Cidade: ", usuario.andress.city);
    } catch (error) {
        console.log(error.message);
    }
}

buscarUsuario()