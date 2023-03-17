let tela = document.getElementById("tela");
let numeros= document.getElementById("numeros");


let valorXSaida = document.getElementById("valorXSaida");
let valorYSaida = document.getElementById("valorYSaida");
let valorXChegada = document.getElementById("valorXSaida");
let valorYChegada = document.getElementById("valorYChegada");

let ctx = tela.getContext("2d");



for(let i = 0; i < 11;i++){
    let posicaoX = i * 50;
    ctx.moveTo(posicaoX,0);
    ctx.lineTo(posicaoX,500);
    ctx.stroke();
    ctx.stroke();

}

for(let i = 0; i < 11;i++){
    let posicaoY = i * 50;
    ctx.moveTo(0,posicaoY);
    ctx.lineTo(500,posicaoY);
    ctx.stroke();
    ctx.stroke();

}

let x = 250;
let y = 250;

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle= "red";
ctx.arc(x,y,25,0,2*Math.PI);

ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle= "black";
ctx.arc(x,y,1,0,2*Math.PI);

ctx.fill();
ctx.stroke();
