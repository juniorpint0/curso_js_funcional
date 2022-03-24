// somar(3)(4)(5)
function somar(n1) {
	return function(n2) {
		return function(n3) {
			return n1 + n2 + n3;
		};
	};
}

const somarN1N2 = somar (3)(4)
console.log(somarN1N2(13))

const somar3 = somar(3)(4)(5);

console.log(somar3);

// calcular(3)(7)(fn)
function calcular(n1) {
	return function(n2) {
		return function(fn) {
			return fn(n1, n2);
		};
	};
}

function multiplicar(n1, n2) {
	return n1 * n2;
}
function somar2(n1, n2) {
	return n1 + n2
}
function subtrair(n1, n2) {
	return n1 - n2
}
function dividir(n1, n2) {
	return n1 / n2
}
// fn -> 3 * 7
console.log(calcular(3)(7)(multiplicar))
// fn -> 3 + 7
console.log(calcular(3)(7)(somar2))
// fn -> 3 - 7
console.log(calcular(3)(7)(subtrair))
// fn -> 3 / 7
console.log(calcular(3)(7)(dividir))