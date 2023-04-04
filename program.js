
/*=====================================================================================================================/*
    Fonte: program.js 
    Motivo: Responsavel pela logica e funcionamento do html 'index.html' ao qual simula uma movimentação de registro.
    Data: 04/04/2023
    Programador: Ighor Drummond, Hikelmi Santos
/*=====================================================================================================================/*

===================================
    Declaração das Variaveis
===================================
*/
    var desconsole = ""; //Receber mensagem para enviar ao console
    var executar = ""; //Recebe o valor de execução 
    var registro = {}; //Recebe os valores dos Rns
    var acelerar = ""; //Recebe o x para Acelerar 
    var base = ""; //recebe se vai trabalhar na base decimal ou binaria
    var operacao = ""; //recebe a operacao matematica
    var Total = 0; //recebe o valor total após a operação escolhida
    var binario = 0; //recebe o valor binario
    var resto = 0; //recebe o valor resto da divisão para binario
    var cont = 0; //usado para os laços 'For'

    window.alert("Versão 1.3.4 - Alpha");
    desconsole = "Seja bem-vindo ao Console da pagina! Este projeto foi desenvolvido a fins academicos para simular uma movimentação";
    desconsole += " de registro."
    console.log(desconsole);

