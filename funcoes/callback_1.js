const subtrairNoTerminal = (n1, n2) => console.log(n1 - n2);
const somarNoTerminal = (n1, n2) => console.log(n1 + n2);
const multiplicar = (n1, n2) => n1 * n2

function exec(fn, n1, n2) {
	return fn(n1, n2);
}

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

const r = exec(multiplicar, 50, 25)
console.log(r)

const cb = () => console.log('Exec...')
setInterval(cb, 1500)
setInterval(() => console.log('Exec 2...'), 2000)
setInterval(function() {
    console.log('Exec 3...')
}, 2500)