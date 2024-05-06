// Arquivo Inicial

//Classificador de nivel de heroi

console.log("Oi. Bem vindo heroi.");

let nome;
let xp;
let nivel;

const readline = require("readline-sync"); 

console.log("Qual o seu nome? ");
nome = readline.question();

console.log("Qual a sua experiencia?");
xp = Number(readline.question());

if(xp <= 1000)
{
     nivel = 'Ferro';
}
else if(xp >= 1001 && xp <= 2000)
    {
        nivel = 'Bronze';
    }
    else if(xp >= 2001 && xp <= 5000)
        {
            nivel = 'Prata';
        }
        else if(xp >= 5001 && xp <= 6000)
            {
                nivel = 'Ouro';
            }
            else if(xp >= 6001 && xp <= 9000)
                {
                    nivel = 'Platina Diamante';
                }
                else if(xp >= 8001 && xp <= 9000)
                    {
                        nivel = 'Ascendente';
                    }
                    else if(xp >= 9001 && xp <= 10000)
                        {
                            nivel = 'Imortal';
                        }
                        else if(xp >= 10001)
                            {
                                nivel = 'Radiante';
                            }

console.log('O Herói de nome '+nome+' está no nivel de '+nivel+'!');

