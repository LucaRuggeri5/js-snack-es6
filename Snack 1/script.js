const biciclette = [
  { nome: "Bianchi", peso: 10 },
  { nome: "Pinarello", peso: 11 },
  { nome: "Colnago", peso: 9 },
  { nome: "Canyon", peso: 7 }
];

let biciLeggera = biciclette[0];

for (let i in biciclette) {
  if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i];
  }
}

console.log("La bici più leggera è:", biciLeggera.nome, "con peso:", biciLeggera.peso);