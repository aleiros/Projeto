console.log("Executei o Javascript");

console.log(1);
console.log(2);
console.log(3);

function calcularIdade() {
    var ano_nascimento = prompt("Em que ano voce nasceu?")

    var idade = 2023 - ano_nascimento

    alert(idade)
};

function colorirAmarelo(){
    var div = document.getElementById('caixa1');

    div.style.backgroundColor = "yellow"
}

function colorir(cor, caixa){
    var div = document.getElementById(caixa);

    div.style.backgroundColor = cor;
}