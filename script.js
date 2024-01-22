let nomeHeroi = "";
let xp = 0;
var nivelHeroi = "";


    if(xp <= 1000) {
        nivelHeroi  = "Ferro"; 
    }    
    else if(xp <= 2000 && xp > 1000){
        nivelHeroi = "Bronze";
    }
    else if(xp <= 5000 && xp > 2000){
        nivelHeroi = "Prata";
    }
    else if(xp <= 7000 && xp > 5000){
        nivelHeroi = "Ouro";
    }
    else if(xp <= 8000 && xp > 7000){
        nivelHeroi = "Platina";
    }
    else if(xp <= 9000 && xp > 8000){
        nivelHeroi = "Ascendente";
    }
    else if(xp <= 10000 && xp > 9000){
        nivelHeroi = "Imortal";
    }
    else if(xp > 10000){
        nivelHeroi = "Radiante";
    }

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
