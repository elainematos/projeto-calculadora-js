/*let cursor = document.querySelector(".pisca");
let botao1 = document.querySelector(".btn-1");
function calculos() {
    

}
document.querySelector('.teclado-botao').addEventListener("click", mostrarNumero);

function mostrarNumero() {
    
    document.querySelector('.numeros').textContent;
    //botao1.innerHTML = value;
};*/
let piscar = document.querySelector('.pisca')  

//Função Inserir números.
function clicou(n){
    let numero = document.querySelector('.numeros').innerHTML;
    document.querySelector('.numeros').innerHTML = numero + n;
    //numero.innerHTML = numero + n;
    //document.querySelector('.numeros .pisca').innerHTML = none;
       
    //numero.classList.remove('.pisca');
       
}
//Função para realizar operações matematicas.
function calcular() {
    var numero = document.querySelector('.numeros');
    if(numero.textContent != 'Erro') {
        document.querySelector('.numeros').innerHTML = eval(numero.innerHTML);
    }
}
//Função limpar numeros
function back() {
    let numero = document.querySelector('.numeros').innerHTML;
     document.querySelector('.numeros').innerHTML = numero.substring(0, numero.length -1); 
}


    
//Função limpar todo o conteudo.
    function limpar(){
    let numeros2 = document.querySelector('.numeros');       
        
    if(numeros2 == numeros2){
        document.querySelector('.numeros').innerHTML = "";
            
           
    }else {
        numeros2.classList.add('.pisca' + "|");
            
        
    

    }

    
}   
  
