// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  { nome: "Peroni", punti: 0, falliSubiti: 0 },
  { nome: "Ichnusa", punti: 0, falliSubiti: 0 },
  { nome: "Tennets", punti: 0, falliSubiti: 0 },
  { nome: "Heineken", punti: 0, falliSubiti: 0 },
  { nome: "Raffo", punti: 0, falliSubiti: 0 },
  { nome: "Rolator", punti: 0, falliSubiti: 0 }
];


for (let i in squadre) {
  squadre[i].punti = Math.floor(Math.random() * 100 + 1);
  squadre[i].falliSubiti = Math.floor(Math.random() * 500 + 1); 
}

console.log(squadre);


const nomiFalli = [];

for (let i in squadre) {
    const numFalli = squadre[i].falliSubiti;
    const nomeSquadra = squadre[i].nome;
    
    nomiFalli.push({nome: nomeSquadra, falli: numFalli});
}

console.log(nomiFalli);