const alunos = [
    {id: 1, nome: "Ana", curso: "JavaScript"},
    {id: 2, nome: "Carlos", curso: "Node.js"},
    {id: 3, nome: "Ingrid", curso: "Banco de dados"},
];

function buscarAluno(id){
    return new Promise((resolve, reject)=>{
        console.log("Consultando o banco de dados.....");

        setTimeout(()=>{
            const aluno = alunos.find((item) => item.id === id)
            if(aluno){
                resolve(aluno)
            }else{
                reject(new Error("Aluno não encontrado"));
            }
        },2000)
    })
}
async function mostrarAluno() {
    try {
        const aluno = await buscarAluno(1);
        console.log("Aluno encontrado");
        console.log("ID", aluno.id);
        console.log("Nome", aluno.nome);
        console.log("Curso", aluno.curso);
    } catch (error) {
        console.log("Erro na consulta:", error.message);
    }
}

mostrarAluno();