const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

// function lerArquivo(caminho){
//     return new Promise(resolve => {
//         const conteudo = fs.readFileSync(caminho);
//         resolve(conteudo.toString());
//     })
// }
function lerArquivo(caminho) {
	return new Promise((resolve) => {
		fs.readFile(caminho, function(_, conteudo) {
			resolve(conteudo.toString());
		});
	});
}

lerArquivo(caminho)
	.then((conteudo) => conteudo.split('\n')) // Quebra as linhas em arrays
	.then((linhas) => linhas.join(','))
	.then((conteudo) => `O valor final é: ${conteudo}`)
	.then(console.log);

lerArquivo(caminho).then((conteudo) => conteudo
.split('\n'))
.then((linhas) => console.log(linhas[1])); // Imprimir só a linha 2

lerArquivo(caminho).then((conteudo) => conteudo
.split('\n'))
.then((linhas) => console.log(linhas.length)); // Imprimir quantos arrays existem an lista
