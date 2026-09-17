//Função: Percorre o array e SELECIONA apenas os itens que atendem a uma condição (retorna true). Gera um NOVO array com menor ou igual ao original.

console.log("=== EXEMPLOS COM filter()===\n");

//EXEMPLO 1 (BÁSICO): Filtrar maiores de idade (>=18)

console.log("---Exemplo 1: Filtrar maiores de idade (Básico)---");

const idades = [12, 17, 18, 21, 14, 30, 25];

//Mantém apenas as idades maiores ou iguais a 18
const maioresDeIdade = idades.filter((idade) => {
    return idade >= 18;
});
console.log("Todas as Idades:", idades);
console.log("Apenas maiores de Idade:", maioresDeIdade);
console.log("\n");

//Exemplo 2 (Intermediário): Filter usuários ativos
console.log("---Exemplo 2: Filtrar cadastros ativos (Intermediário)---");

const usuarios = [
    {id: 1, nome: "Ana", ativo: true},
    {id: 2, nome: "Bruno", ativo: false},
    {id: 3, nome: "Carlos", ativo: true},
    {id: 4, nome: "Diana", ativo: false}
];
 const usuariosAtivos = usuarios.filter((usuario) => usuario.ativo);

 console.log("\n");

 //Exemplo 3 (Back-End Real): Filtro de produtos por estoque e categoria (GET /produtos?categoria)
 console.log("---Exemplo 3: Endpoint de vitrine com produtos em estoque (Back-End Real---");

 const catalogo = [
    {id: 101, nome: "Teclado Mecânico", categoria: "Periféricos", preco: 250.0, estoque: 12, ativo: true },
    {id: 102, nome: "Monitor Gamer", categoria: "Periféricos", preco: 120.0, estoque: 0, ativo: true};
    {id:103, nome: "Monitor 144Hz", categoria: ""}
 ]