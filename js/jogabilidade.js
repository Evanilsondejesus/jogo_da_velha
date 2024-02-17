
 
    


var pecas = document.querySelectorAll("button");   

const pontoJogador = document.querySelector("#ponto_jogador");   
const pontoMaquina = document.querySelector("#ponto_maquina");   
const nomeJogador = document.getElementById("nome_jogador");
const mytemplete = document.createElement("template");




if(localStorage.nomeJogador != undefined){
 
nomeJogador.innerText = localStorage.nomeJogador;

}




let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  
  
  var maquina = [];
  var jogador = [];   
  var jogando = true; 
  
  
  



function Init() {
maquina = [];
jogador = [];
jogando = true;




for (let n = 0; n < pecas.length; n++) {
    
    pecas[n].innerText = "";
    pecas[n].style.color = "black";
    pecas[n].style.fontSize = "20px";


pecas[n].addEventListener("click", Marca);

}




}




Init()




function Marca(e) {
   
     var index = Number(e.target.getAttribute("data-peca"));
    
    e.target.removeEventListener("click", Marca);
    jogador.push(index) 
     
    
    if (jogando==true)  e.target.innerText = "x"; e.target.style.fontSize = "3rem"
    
     verificar();
    

  }
    
    




function verificar() {
    if (!(jogando)) {  return;}  //
    
    
    for (pot of positions) {
     
        if (pot.every( (item) => jogador.includes(item))) {
       
      
      for (let n = 0; n < pot.length; n++) {
        pecas[ (pot[n] - 1) ].style.color = "blue"
        pecas[(pot[n] -1)].style.fontSize = "5rem"
        
        
      }
    



    setTimeout(() => {
      
      NGanhador("voce")
    }, 1000);
  jogando = false;
    
    
    
    
    setTimeout(() => {
     Init()
     jogando = true;
    
    
    }, 5000);
    

    
     return;
        }
  }
    
     

    
    
 Maquina()
     for (teste of positions) { 
    
     
     if (teste.every( (item) => maquina.includes(item))) {
    
    for (let n = 0; n < pot.length; n++) {
        pecas[ (teste[n] - 1) ].style.color = "blue"
        pecas[(teste[n] -1)].style.fontSize = "5rem"
    }
    

setTimeout(() => {

  NGanhador("maquina")
}, 1300);
 return;
     }


     
 }
    
}
    
    
    




function Maquina() {
    if ((maquina.length + jogador.length) < 8) {
        
        do {
         var   num = Math.floor(Math.random() * 9) + 1;
        
        
          } while (jogador.includes(num) || maquina.includes(num) );
           
        
          maquina.push(num);  
        pecas[(num -1)].innerText=  "0"; 
        pecas[(num -1)].style.fontSize = "3rem"
        
            
        }else{
     
          NGanhador("Impate")


 
}
}
    
    

 
//TEMPLETES



 



    
function NGanhador(nomeganhado) { 
var nome = "";
var ganhadoImg;
 
if(nomeganhado ==="voce"){
Number(pontoJogador.innerText++);
nome ="voce ganhou!!"
ganhadoImg ="imagens/garoto_ganhou.png";
  
  }else if(nomeganhado =="maquina"){
    nome ="máquina ganhou!!"

      Number(pontoMaquina.innerText++);
  ganhadoImg ="imagens/robo_ganhou.png";
  
  
  }else{
    nome ="impate ninguém ganhou"
    ganhadoImg ="imagens/ninguem_ganhou.png";
  
  
  }


mytemplete.innerHTML = `
<style>

:root {
--cor-primaria: #b5d1ec; 
    
  }
.info_ganhador {
    position: fixed;
    top: 50%;  
    left: 50%;  
    transform: translate(-50%, -50%);
    font-size: 1.4rem;
    text-align: center;
    border-radius: 14px;
    background-color: #4FA8FB;
    border: 7px solid var(--border_cor);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 2% 6%;
  }

button{
background-color: transparent;
border: none;  
} 

button img{
width: 25px;
animation: girar 2s infinite linear;
}
 
.container_tabuleiro button:hover{
background: rgba(0, 0, 0, 0.2);
box-shadow:none;
}


@keyframes girar {
from {
transform: rotate(0deg);  
}
to {
transform: rotate(360deg);  
}
}
 

@media (max-width: 699px) {
  
  .info_ganhador img{
   width: 70%;
  }
#btn_reiniciar{
  width: 25px; 
}
 
}
 




</style>


<div class="info_ganhador" id="informacao"> 
 ${nome}
     <img src=${ganhadoImg}>
<button> <img src="imagens/loading.png"  id="btn_reiniciar"></button>
<span id="resultado"></span>
</div> 
    
    `;
document.body.appendChild(mytemplete.content.cloneNode(true));





var resultado = document.querySelector("#resultado");
var colorBody = document.documentElement;
const btn_reiniciar = document.getElementById("btn_reiniciar");




//inicio
colorBody.style.setProperty('--bordy_cor', '#e6f2f8');
colorBody.style.setProperty('--cor-primaria', '#9dc8f0');

  



btn_reiniciar.addEventListener("click",  ()=>{
document.getElementById("informacao").remove();
const alteraBody = document.documentElement;
 alteraBody.style.setProperty('--cor-primaria', '#4FA8FB'); //#9dc8f0
alteraBody.style.setProperty('--bordy_cor', '#4FA8FB');
 
})
 
 





setTimeout(()=>{ 
setTimeout(() => {
resultado.innerText = "Jogo está iniciando..."
document.getElementById("informacao").remove()
jogando = true;

var root = document.documentElement;
root.style.setProperty('--cor-primaria', '#4FA8FB');
root.style.setProperty('--bordy_cor', '#b4d3fb');
 

}, 1000);


Init()
 resultado.innerText = "Jogo inciando..."




}, 2000);


       






















}