nomeDoHeroi = "Diego";
xpDoHeroi = 9800;
nivelDoHeroi = "";

if (xpDoHeroi <= 1000) {
  nivelDoHeroi = "Ferro";
} else if (xpDoHeroi > 1000 && xpDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (xpDoHeroi > 2000 && xpDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (xpDoHeroi > 5000 && xpDoHeroi <= 7000) {
  // Aqui corrigi o intervalo de XP pois no enunciado ficou uma lacuna entre 5k e 6k
  nivelDoHeroi = "Ouro";
} else if (xpDoHeroi > 7000 && xpDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (xpDoHeroi > 8000 && xpDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi > 9000 && xpDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante";
}
console.log("O heroi " + nomeDoHeroi + " esta no nivel de " + nivelDoHeroi);
