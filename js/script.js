console.log('scrivere in console tutti i numeri interi da 0 a 100 incluso');
for (let i = 0; i <= 100; i++) { // i = i + 1
	console.log(i);
}

console.log('scrivere in console tutti i numeri interi da 0 a 100 incluso a passo 2');
for (let i = 0; i <= 100; i += 2) { // i = i + 2
	console.log(i);
}

console.log('scrivere in console tutti i numeri interi da 100 a 0 incluso');
for (let i = 100; i >= 0; i--) { // i = i - 1
	console.log(i);
}

console.log('fare un ciclo che non sia infinito');
for (let i = 1; i <= 100; i *= 3) { // i = i * 3
	console.log(i);
}


let x = 100;
let y = x++ * 2;
console.log('x', x);
console.log('y', y);

let z = 100;
let t = ++z * 2;
console.log('x', z);
console.log('y', t);