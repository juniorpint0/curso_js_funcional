function esperarPor(tempo = 2000) {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			resolve();
		}, tempo);
	});
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 1...'))

function retornarValor() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(10), 5000);
	});
}
async function retornarValorRapido() {
	// Quando a função é marcada como async ela retorna uma Promise
	return 20;
}
async function executar() {
	let valor = await retornarValorRapido(); //Para receber o valor é preciso passar await, se não o valor vem como [Object Promise]
	await esperarPor(1500);
	console.log(`Async/Await ${valor}...`);
	await esperarPor(1500);
	console.log(`Async/Await ${valor + 1}...`);
	await esperarPor(1500);
	console.log(`Async/Await ${valor + 2}...`);

	return valor + 3;
}

//const v = executar() // Promise { <pending> } não da pra pegar um valor na hora de uma função Async
//console.log(v);

//executar().then(console.log) //Para acessar temos que usar o .then

async function executarDeVerdade() {
	const valor = await executar();
	console.log(valor);
}

executarDeVerdade(); //Assim também pode se pegar os dados, pois esta dentro de uma função async dentro de outra função async que retorna uma promise
