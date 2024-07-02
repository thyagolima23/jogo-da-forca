
let listaPalavras = ['banana','batata','palavra','maranata'];
let numeroSorteado =Math.floor(Math.random() * listaPalavras.length);
let palavraEscolhida = listaPalavras[numeroSorteado];
let t = palavraEscolhida.length //tamanho=6
let resposta=[]
let letra = null;
let vida = 6
//Montar caixa vazia
for(let i=0; i<t; i++){
resposta[i]="_"  //cria os campos do jogo
}
alert(`Bem-vindo!\n a palavra sorteada tem ${t} letras`); 
do{  //início do jogo
     letra = prompt(`Informe uma letra, você tem ${vida} vidas`);
     console.log(resposta);
         
          if(resposta.indexOf(letra.toUpperCase())!=-1){
             alert('Essa letra já foi utilizada')
          }
        for(let j=0; j<t; j++){
             if(letra == palavraEscolhida[j]){  //2°
                 resposta[j]= letra.toUpperCase()
             }
         }
      
      
        if(resposta.indexOf(letra.toUpperCase())==-1){
           vida--
        }
        if(vida==0){
         alert("Você perdeu o jogo!!!");
        }
        if(resposta.indexOf("_")==-1){
          alert("Parabéns, você conseguiu vencer o jogo!!!");
          vida=0;
         }
alert(resposta);

}while(vida>0);

window.location.reload(true);
