const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt'); // _dirname quer dizer o mesmo diretório da pasta

function exibirConteudo(err, conteudo) {
	console.log(conteudo.toString());
}

console.log('Inicio...');
fs.readFile(caminho, {}, exibirConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString())); // Quando não se quer passar o primeiro parâmetro, pode se usar underline _, o segundo parâmetro nesse caso pode ser suprimido.
console.log('Fim...');

// fs.readFileSync(caminho)

console.log('Inicio Sync...');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Fim Sync...');
