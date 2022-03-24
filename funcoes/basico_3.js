// Arrow Function
const felizNatal = () => console.log('Feliz Natal');
felizNatal();

const saudacao = (nome) => `Fala ${nome}, blz?!`;
console.log(saudacao('Maria'));

const somar = (numeros) => {
	let total = 0;
	for (let n of numeros) {
		total += n;
	}
	return total;
};

console.log(somar([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]));

const somar2 = (...numeros) => {
	console.log(Array.isArray(numeros));
	console.log(typeof numeros); // Object que é um Array

	let total = 0;
	for (let n of numeros) {
		total += n;
	}
	return total;
};

console.log(somar2(1, 2, 3));
console.log(somar2(1, 2, 3, 4, 5, 6));

const potencia = (base) => (exp) => Math.pow(base, exp);

console.log(potencia(2)(8));

// this
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}
Array.prototype.primeiro = function() {
    console.log(this[0])
}

const numeros = [-333, 1, 2, 500, -10000, 1000]
numeros.ultimo()
numeros.primeiro()