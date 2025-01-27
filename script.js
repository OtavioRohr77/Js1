

//instancia o objeto botao
const btnTrocaCor = document.getElementById("trocaCor");
let caixaTexto = document.getElementById('caixa');

//evento de clique
btnTrocaCor.addEventListener("click", () => {
    //captura o nome do conteúdo
    let caixaTexto = document.getElementById('caixa');   
   
    //valida o nome da cor
    if( caixaTexto.className === "verde"){
        caixaTexto.classList.add('amarelo');
        caixaTexto.classList.remove('verde');
    }else{
        caixaTexto.classList.add('verde');
        caixaTexto.classList.remove('amarelo');
    }
    
    //exibe no console
    console.log(caixaTexto.className);
});

//troca texto
const btnTrocaTexto = document.getElementById("trocaTexto");
btnTrocaTexto.addEventListener("click", () => {
    if(caixaTexto.innerText === "Banana"){
    document.getElementById("caixa").innerHTML = "Limão";
    }else{document.getElementById("caixa").innerHTML = "Banana"
    }
});

//soma dos valores
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let soma = parseInt(numero1) + parseInt(numero2);
    console.log(soma);
});