//METODO: find()

//Função: Percorre o array e retorna o PRIMEIRO ELEMENTO que satisfaz a condição.
//Se nenhum for encontrado, retorna undefined.

console.log("=== EXEMPLOS COM find() ===\n");

// EXEMPLO 1 (Básico): Primeiro número acima da média
console.log("--- Exemplo 1: Primeiro nota aprovada (Básica) ---");

const notas = [4.5, 5.7, 7.5, 9.9, 6.0];

const primeiraNotaAprovada = notas.find((nota) => nota >= 7.0);

console.log("Primeira nota >= 7.0:", primeiraNotaAprovada);
console.log("\n");

// Exemplo 2 (Intermediário): Buscar usuário por nome

console.log("--- Exemplo 2: Buscar cliente por nome (Intermediário) ---");

const clientes = [
    { id: 1, nome: "Marcos Vinicius", plano: "Free"},
    { id: 2, nome: "Juliana Mendes", plano: "Premium"},
    { id: 3, nome: "Carlos Eduardo", Plano: "Pro"}
];

const clienteEncontrado = clientes.find((c) => c.nome === "Juliana Mendes");

console.log("Cliente localizado:", clienteEncontrado);
console.log("\n");

//Exemplo 3 (Back-End Real): Simulação de Rota GET /usuarios/:id com status 200/404

console.log(" ---Exemplo 3: Rota GET/ ususrios/:id (Back-End Real) ---");

const usuariosBanco = [
    { id: 1, nome: "Ana Silva", email: "ana@email.com", cargo: "Desenvolvedora"},
    { id: 2, nome: "Bruno Costa", email: "bruno@email.com", cargo: "Designer"},
    { id: 3, nome: "Carla Souza", email: "carga@email.com", cargo: "Tech Lead"}
];

function buscarUsuarioPorId(idRequisitado) {
    const usuario = usuariosBanco.find((u) => u.id ===idRequisitado);

    if (!usuario) {
        return {
            status: 404,
            mensagem: `Erro: Usuário com ID ${idRequisitado} não foi encontrado`
        };
    }
    
    return {
        status: 200,
        dado: usuario
    };
}

console.log(buscarUsuarioPorId(2));
console.log(buscarUsuarioPorId(99));