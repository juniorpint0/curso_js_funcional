class Produto {
	constructor(nome, preco, desc) {
		this.nome = nome;
		this.preco = preco;
		this.desc = desc;
	}
	set preco(novoPreco) {
		if (novoPreco >= 0) {
			this._preco = novoPreco;
		}
	}
	get preco() {
		return this._preco;
	}
	get precoFinal() {
		// Pode ser usado o get
		return this.preco * (1 - this.desc);
	}

	get nome() {
		// Função dentro de uma classe é chamado de método
		return `Produto: ${this._nome}`;
	}
	set nome(novoNome) {
		this._nome = novoNome.toUpperCase();
	}
}

const p1 = new Produto('Caneta', 10);
//p1.nome = 'caneta'
p1.preco = -20;
console.log(p1.nome);
console.log(p1.preco);

const p2 = new Produto('Geladeira', 10000, 0.8);
console.log(p2.preco);
console.log(p2.precoFinal); // Ao usar o get, não usara ele mais como função e sim como atributo, sem (), por nomenclatura ele é chamado de método
