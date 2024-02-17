
const jogo = document.getElementById("jogabilidade");
const nomeJogador = document.getElementById("nome_jogador");
const jogabilidade = document.getElementById("jogabilidade");
const sobre = document.getElementById("sobre");
const som = document.getElementById("som");
const btn_start = document.getElementById("start");
    
const mytemplete = document.createElement("template");

var statusSom =false;






btn_start.addEventListener("click", ()=>{

  reproduzirSom()
})


som.addEventListener("click", ()=>{
  mytemplete.innerHTML = `
    <style>
    
    :root {
    --cor-primaria: #b5d1ec; 
        
      }
    .info_ganhador {
        position: fixed;
        top: 50%;  
        left: 50%;  
        transform: translate(-50%, -90%);
        font-size: 30px;
        text-align: center;
        border-radius: 14px;
        background-color: #4FA8FB;
        border: 7px solid var(--border_cor);
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 2% 6%;
        
border: 3px solid white;
      }
    
    button{ 
    font-size: 1.2rem;
    border: none; 
    padding: 4px;
    border-radius: 6px;
    background: transparent;
    cursor: pointer; 
     border: 0.5px solid white; 
    } 
    button:hover{
    box-shadow: 1px 3px 4px #505355;
    opacity: 0.7;
    border: 1px solid white; 
    }




    button img{
    width: 25px;
    animation: girar 2s infinite linear;
    }
     
    .container_tabuleiro button:hover{
    background: rgba(0, 0, 0, 0.2);
    box-shadow:none;
    

    }

    select{
    
      font-size: 1.2rem;
      border: none; 
      padding: 4px;
      border-radius: 6px;
      background: transparent;
      cursor: pointer; 
       border: 0.5px solid white; 
    
    }






 
    </style>
    
    
    <div class="info_ganhador" id="informacao">
     

     <label for="escolha">SOM</label>
     <select id="escolha" size="2">
       <option value="true">ativado</option>
       <option value="false">desativado</option>
     </select>
     




 
      
    </div> 
        
        `;
    document.body.appendChild(mytemplete.content.cloneNode(true));
      



    const infoUser = document.getElementById("informacao");



      document.getElementById('escolha').addEventListener('change', function() {
        localStorage.som= this.value;
      //  var valorSelecionado = this.value;  
       // var valorBooleano = (valorSelecionado === 'true');  
     

     // alert(localStorage.som)
       //  localStorage.som = valorBooleano
         infoUser.remove();




    });



















  reproduzirSom()
})


























nomeJogador.addEventListener("click",()=>{

  reproduzirSom()
    mytemplete.innerHTML = `
    <style>
    
    :root {
    --cor-primaria: #b5d1ec; 
        
      }
    .info_ganhador {
        position: fixed;
        top: 50%;  
        left: 50%;  
        transform: translate(-50%, -90%);
        font-size: 30px;
        text-align: center;
        border-radius: 14px;
        background-color: #4FA8FB;
        border: 7px solid var(--border_cor);
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 2% 6%;
        
border: 3px solid white;
      }
    
    button{ 
    font-size: 1.2rem;
    border: none; 
    padding: 4px;
    border-radius: 6px;
    background: transparent;
    cursor: pointer; 
     border: 0.5px solid white; 
    } 
    button:hover{
    box-shadow: 1px 3px 4px #505355;
    opacity: 0.7;
    border: 1px solid white; 
    }




    button img{
    width: 25px;
    animation: girar 2s infinite linear;
    }
     
    .container_tabuleiro button:hover{
    background: rgba(0, 0, 0, 0.2);
    box-shadow:none;
    

    }


    input{
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    border: none;
    font-size:14px;

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

    .info_ganhador {
font-size: 1.2rem;

    } 
  
  
  
  }
        
     
    
    </style>
    
    
    <div class="info_ganhador" id="informacao"> 
    <span>NOME DE USUÁRIO</span>
     <input type="text" max-lenght="4" id="nome_user" placeholder="digite...">
        
    <button id="btn_salvar">salvar</button>
      
    </div> 
        
        `;
    document.body.appendChild(mytemplete.content.cloneNode(true));
    
    
const nomeUser = document.getElementById("nome_user");

const salvar = document.getElementById("btn_salvar");

const infoUser = document.getElementById("informacao");




salvar.addEventListener("click", ()=>{

  if (nomeUser.value == "") return alert("adicione um nome válido");
    localStorage.nomeJogador = nomeUser.value;
    infoUser.remove()
    reproduzirSom()
}




)


})
 







jogabilidade.addEventListener("click",()=>{

  reproduzirSom()
 
  mytemplete.innerHTML = `
  <style>
  
  :root {
  --cor-primaria: #b5d1ec; 
      
    }
  .info_jogabilidade {
      position: fixed;
      top: 50%;  
      left: 50%;  
      transform: translate(-50%, -90%);
      font-size: 1.2rem;
      text-align: center;
      border-radius: 14px;
      background-color: #4FA8FB;
      border: 7px solid var(--border_cor);
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 2% 6%;
      
border: 3px solid white;
    }
  
  button{ 
  font-size: 1.2rem;
  border: none; 
  padding: 4px;
  border-radius: 6px;
  background: transparent;
  cursor: pointer; 
   border: 0.5px solid white; 
   display: block;
   width: 100%;
  } 
  button:hover{
  box-shadow: 1px 3px 4px #505355;
  opacity: 0.7;
  border: 1px solid white; 
  }


 
   
  .container_tabuleiro button:hover{
  background: rgba(0, 0, 0, 0.2);
  box-shadow:none;
  

  }
  

   P{
    text-transform: uppercase;
    text-transform: none;
  }
  
  </style>
  
  
  <div class="info_jogabilidade" id="informacao"> 
  <span>Jogabilidade</span> 
  <p>



  Jogo contra humano e máquina, tente ser mais inteligente do que o robo e vença as partida marcado com "x", a opção desejada.
  O jogo términa quando um dos integrantes completa consegue marcar todas as casas de uma linha, coluna ou diagonal do tabuleiro
  horizontal, vertical, diagonal
  <button id="btn_sair">sair</button>
  </p>
  </div> 
      
      `;
  document.body.appendChild(mytemplete.content.cloneNode(true));



  const infoUser = document.getElementById("informacao");
  const sair = document.getElementById("btn_sair");




  sair.addEventListener("click", ()=>{ 
  
  infoUser.remove()
  })




  
})




sobre.addEventListener("click", ()=>{

  reproduzirSom()
  mytemplete.innerHTML = `
  <style>
  
  :root {
  --cor-primaria: #b5d1ec; 
      
    }
  .info_jogabilidade {
      position: fixed;
      top: 50%;  
      left: 50%;  
      transform: translate(-50%, -90%);
      font-size: 1.1rem;
      text-align: center;
      border-radius: 14px;
      background-color: #4FA8FB;
      border: 7px solid var(--border_cor);
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 2% 6%;
      
border: 3px solid white;
    }
  
  button{ 
  font-size: 1.2rem;
  border: none; 
  padding: 4px;
  border-radius: 6px;
  background: transparent;
  cursor: pointer; 
   border: 0.5px solid white; 
   display: block;
   width: 100%;
  } 
  button:hover{
  box-shadow: 1px 3px 4px #505355;
  opacity: 0.7;
  border: 1px solid white; 
  }


 
   
  .container_tabuleiro button:hover{
  background: rgba(0, 0, 0, 0.2);
  box-shadow:none;
  

  }
  

   P{
    text-transform: uppercase;
    text-transform: none;
  }
  
  </style>
  
  
  <div class="info_jogabilidade" id="informacao"> 
  <span>Sobre</span> 
  <p>
O jogo foi desenvolvido pro <strong>Evanilson Almeida</strong>
</p>

Contanto

<p>
<a href="https://github.com/Evanilsondejesus">Projeto do Github</a><br>
<a href="https://api.whatsapp.com/send/?phone=5575998537335&text&type=phone_number&app_absent=0">Whatsapp</a>
 </p>

<button id="btn_sair">sair</button>
</p>
</div> 
      
      `;
  document.body.appendChild(mytemplete.content.cloneNode(true));

  
  const infoUser = document.getElementById("informacao");
  const sair = document.getElementById("btn_sair");

sair.addEventListener("click", ()=>{ 
  
  infoUser.remove()
  })


}
)








function reproduzirSom() {
  if (statusSom) {
     var audio = document.getElementById("meuAudio");
     audio.play();
   
   }}
  