const carrinho = [
	{ nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
	{ nome: 'Impressora', qtde: 1, preco: 649.5, fragil: true },
	{ nome: 'Caderno', qtde: 4, preco: 27.1, fragil: false },
	{ nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
	{ nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true }
];

// 1. fragil: true
// 2. qtde: * preco -> total
// 3. media totais

const quant = item => item.qtde
const fragil = (item) => item.fragil;
const getTotal = (item) => item.qtde * item.preco;
const quantItens = (item) => item.qtde
const getMedia = (acc, el) => {
	const novaQtde = acc.qtde //+ 1;
	const novoTotal = acc.total + el;
	return {
		qtde: novaQtde,
		total: novoTotal,
		media: novoTotal / novaQtde
	};
	
};
const somar = (acc, el) => {
	return acc + el;
};

const contagem = carrinho.filter(fragil).map(quant).reduce(somar)

const mediaInicial = { qtde: contagem, total: 0, media: 0 };

const media = carrinho.filter(fragil).map(getTotal).reduce(getMedia, mediaInicial).media;

console.log(`A quantidade de itens no carrinho é ${contagem} e seu valor total ${carrinho.filter(fragil).map(getTotal).reduce(somar)}, sua média foi ${media}!`);

//console.log(contagem)
