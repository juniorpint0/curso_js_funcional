function gerarNumerosEntre(min, max, tempo) {
	if (min > max) [ max, min ] = [ min, max ];
	return new Promise((resolve) => {
		setTimeout(function() {
			const fator = max - min + 1;
			const aleatorio = parseInt(Math.random() * fator) + min;
			resolve(aleatorio);
		}, tempo);
	});
}

function gerarVariosNumeros() {
	return Promise.all([
		// Gera vários Promises ao mesmo tempo e so vai devolver a resposta quando todos acabarem.
		gerarNumerosEntre(1, 60, 4000),
		gerarNumerosEntre(1, 60, 1000),
		gerarNumerosEntre(1, 60, 2000),
		gerarNumerosEntre(1, 60, 3000),
		gerarNumerosEntre(1, 60, 400),
		gerarNumerosEntre(1, 60, 1070)
	]);
}

console.time('Promise'); // Label para o Time
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
	console.timeEnd('Promise');
});
