//Lista de teclas

const keyList = document.querySelectorAll('.tecla');

function playSound(selectorSound){  
    const element = document.querySelector(selectorSound);

    if(element != null && element.localName === 'audio' ){
        element.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor não encontrado!')
    }
    
} 

for(let i = 0; i < keyList.length; i++){

    const key = keyList[i];
    const instrument = key.classList[1]; //Pega a classe 2 de dentro da lista de teclas.
    const idSound = `#som_${instrument}`;

    //Função de apertar o botão da lista de teclas.

    key.onclick = function(){
        playSound(idSound);     
    }

    //Quando as teclas Enter e Space tiver apertada adiciona a classe 'ativa' na lista de telas.

    key.onkeydown = function(event){
        if(event.code === 'Enter' || event.code === 'Space'){  
            key.classList.add('ativa');
        }
    } 

    key.onkeyup = function(){
        key.classList.remove('ativa');
    }

}