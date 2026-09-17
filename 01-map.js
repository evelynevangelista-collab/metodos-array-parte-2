// MÉTODO: map()

//Função: Percorre o array e TRANSFORMA cada item, retornando um NOVO  array com o mesmo tamanho do original.

console.log("=== EXEMPLOS COM map() ===");

//Exemplo 1 (Básico): Dobrar valores numéricos
console.log("--- Exemplo 1: Dobro de números (Básicos) ---");
const numeros =[1, 2, 3, 4, 5];

const dobrados = numeros.map((num) => {
    return num * 2;
});

console.log("Original:", numeros);
console.log("Dobrados:", dobrados);
console.log("\n");

//EXEMPLO 2 (Intermediário): Extração de propriedades em array de objetos

console.log("--- Exemplo 2: Extrair apens os nomes (Intermediário)---");

const usuarios = [
    {id:1, nome: "Ana Silva", idade: 22 },
    {id: 2, nome: "Bruno Costa", idade:17},
    {id: 3, nome: "Carlos Souza", idade: 30 }
];

const apenasNomes = usuarios.map((usuario) => usuario.nome);

console.log("Lista de Nomes:", apenasNomes);
console.log("\n");

//Exemplo 3 (Back-end Real): Sanitização e Formatação de DTO para resposta de API
console.log("---Exemplo 3; DTO e Sanitização de Dados de API (Back-end Real)---");
const produtosBanco = [
    {id: 101, nome: "Teclado Mecânico RGB", preco:250.0, estoque: 15, custoInterno: 12.0},
    {id: 102, nome: "Mouse Gamer 16000 DPI", preco: 120.0, estoque: 0, custoInterno: 50.0},
    {id: 103, nome: "Monitor 144Hz IPS", preco: 1100.0, estoque: 8, custoInterno: 700.0}
];

//Regra de Back-End: Formatar preço para o cliente e omitir dados sensíveis(custo interno)
const respostaApiPublica = produtosBanco.map((produto) => {
    return {
        id: produto.id,
        titulo:produto.nome.toUpperCase(),
        precoFormato: `R$ ${produto.preco.toFixed(2)}`,
        disponivel: produto.estoque > 0
    };
});

console.log("Resposta da API (Sem custo interno):");
console.log(respostaApiPublica);
//fim