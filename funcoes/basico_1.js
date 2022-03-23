// Function Declaration
function bomDia() {
	console.log('Bom dia!');
}

bomDia();

// Function expression
const boaTarde = function() {
	console.log('Boa Tarde!');
};

boaTarde(); //undefined

function somar(a, b) {
	return a + b;
}

let resultado = somar(3, 4); 
console.log(resultado);

resultado = somar(5, 6, 7, 8); // Javascript não reclama se você passa mais parâmetros
console.log(resultado);

resultado = somar(3); // Vai somar 5 + undefined, a resposta da NaN
console.log(resultado);
