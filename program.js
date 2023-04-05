
/*=====================================================================================================================/*
    Fonte: program.js 
    Motivo: Responsavel pela logica e funcionamento do html 'index.html' ao qual simula uma movimentação de registro.
    Data: 04/04/2023
    Programadores(As): Ighor Drummond, Hikelmi Santos
/*=====================================================================================================================*/
/*
===================================
    Declaração das Variaveis
===================================*/
    var desconsole = ""; //Receber mensagem para enviar ao console
    var executar = ""; //Recebe o valor de execução 
    var registro = [0, 0, 0, 0]; //Recebe os valores dos Rns
    var escolhareg = ["R0", "R0", "R0"] //Recebe registro que serão escolhido pelo usuario
    var acelerar = ""; //Recebe o x para Acelerar 
    var base = "Dec"; //recebe se vai trabalhar na base decimal ou binaria
    var Total = 0; //recebe o valor total após a operação escolhida
    var posicOp = 0//Guarda a posição anterior do cubo de operacao matematica
    var binario = 0; //recebe o valor binario
    var resto = 0; //recebe o valor resto da divisão para binario
    var cont = 0; //usado para laços do tipo 'For'
    var posic = [0,0,0,0]; //usado para gaurdar alguns criterio estabelecido dos cubos
    var numReg = 0; //usado para apontar dentro do array registro
    var valorSelect = ""; //Responsavel por receber o valor da operação matematica escolhida pelo usuario
    var Fala = ["","","",""] //Responsavel por amarzenar as falas do Garcia Achatado
  
    window.alert("Versão 1.5.4 - Alpha");//balão apenas para indicar que o site está na versão alpha - sera removido após a conclusão
    desconsole = "Seja bem-vindo ao Console da pagina! Este projeto foi desenvolvido a fins academicos para simular uma movimentação";
    desconsole += " de registro."
    console.log(desconsole);
/*====================================================================================================
    Escopo: Reservado para alocar as mensagens
    Motivo: Escopo Reservado para alocar as mensagens ao qual o 'Garcia Achatado' Irá falar.
    Data: 05/04/2023
    Programadores(As): Ighor Drummond
======================================================================================================*/
    //Inicio da Primeira Fala
    Fala[1] = "Olá! Meu nome é Garcia Achatado e estou disposto a te explicar o funcionamento deste Simulador." 
    Fala[1] += " No 'C Buss...' é reponsavel por receber o valor total da operação matematica de dois registro."
    Fala[1] += " No 'A Buss...' e no 'C Buss...' é responsavel por apontar qual dos Rns você digitou o valor e qual valor você quer somar, dividir e etc..."
    Fala[1] += " Para escolher a operação, selecione no 4º Cubo abaixo da primeira tabela, o campo com valor padrão de 'A+B', Após isso aperte em 'Executar'"
    Fala[1] += "Fique a vontade para desfrutar do programa 'OH VEIO!'."
    //ao iniciar a pagina, já é carregado a fala padrão do garcia achatado
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("achatadofala").innerHTML = Fala[1];

    });
    Fala[2] = "" //em breve
    Fala[3] = "" //em breve
    Fala[4] = "" //em breve
/*===============================================================
    Função: Registro(Recebe o Rn digitado)
    Motivo: responsavel por pegar os valores dos R0, R1, R2 e R3
    Data: 04/04/2023
    Programadores(As): Ighor Drummond
=================================================================*/
    function Registro(numReg){ 
        registro[numReg] = document.getElementById("getdados"+numReg.toString()).value;
    }

/*==============================================================================================
    Função: BotaoCubo(soma 90 graus a mais, cubo correspondente)
    Motivo: Aciona a animação do cubo correspondente e calcula o graus de deslocamento no eixo Y
    Data: 05/04/2023
    Programadores(As): Ighor Drummond
================================================================================================*/
    function BotaoCubo(nGraus, botao){
        if(posic[botao] != 360){
            posic[botao] += nGraus;
        }
        else{
            posic[botao] = 0;
            posic[botao] += nGraus;
        }
        animacubo(posic,botao);//Responsavel por posicionar o cubo no eixo Y
        SelecionaRegistro(posic[botao], botao);//aqui ele selecionara o registro escolhido
    }
/*===========================================================
    Função: animacubo(graus, cubo correspondente)
    Motivo: Anima a trajetoria dos cubos após aperta o botão
    Data: 05/04/2023
    Programadores(As): Ighor Drummond
=============================================================*/
    function animacubo(posic,botao){

        ValorAnterior = posic[botao] - 90;//posiciona o grau anterior ao qual o cubo se enposicrava no eixo Y
  
        document.getElementById("cube"+botao.toString()).animate([
            // keyframes
            { transform: "scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY("+ValorAnterior.toString()+"deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg) " },
            { transform: "scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY("+posic[botao].toString()+ "deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg) " }
        ], {
            // timing options
            duration: 1000,
            iterations: 1
        });
        
        //adiciona a nova posição que o cubo estará na posição Y
        document.getElementById("cube"+botao.toString()).style.msTransform = "rotatey("+posic[botao].toString()+"deg)"; 
        // Standard syntax
        document.getElementById("cube"+botao.toString()).style.transform = "rotatey("+posic[botao].toString()+"deg)"; 
    }
/*====================================================================================================
    Função: OperacaoMath()
    Motivo: Responsavel por receber a operação matematica e posicionar o cubo no eixo Y correspondente
    Data: 05/04/2023
    Programadores(As): Ighor Drummond
======================================================================================================*/
    function OperacaoMath(){ 
        var select = document.querySelector('#operacao'); //Recebe o select e seus indexs da operação matematica
        valorSelect = select.options[select.selectedIndex].value;

        if(valorSelect == "+"){
            RotacionaCubo(posicOp,360)
            posicOp = 360;
        }
        else if(valorSelect == "-"){
            RotacionaCubo(posicOp,90)
            posicOp = 90;      
        }
        else if(valorSelect == "*"){
            RotacionaCubo(posicOp,180)
            posicOp = 180;                 
        }
        else if(valorSelect == "/"){
            RotacionaCubo(posicOp,270)
            posicOp = 270;    
        }

    }    
/*====================================================================================================
    Função: SelecionaRegistro(numero do registro responsavel, campo responsavel pelo cubo especifico)
    Motivo: Guardar qual Rn foi escolhido pelo usuario de acordo com o cubo correspondente.
    Data: 05/04/2023
    Programadores(As): Ighor Drummond
======================================================================================================*/
    function SelecionaRegistro(numerador, botao){
        if(numerador == 360){
            escolhareg[botao] = "R0";
        }
        else if(numerador == 90){
            escolhareg[botao] = "R3";
        }
        else if(numerador == 180){
            escolhareg[botao] = "R2";
        }
        else if(numerador == 270){
            escolhareg[botao] = "R1";
         }
    }
/*====================================================================================================
    Função: RotacionaCubo(Posicição anterior, Posição que será a atual)
    Motivo: Responsavel por Rotacionar o cubo da operação matematica para o eixo Y
    Data: 05/04/2023
    Programadores(As): Ighor Drummond
======================================================================================================*/
    function RotacionaCubo(posicOp, PoAtual){
        document.getElementById("cube4").animate([
            // keyframes
            { transform: "scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY("+ posicOp.toString() + "deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg) " },
            { transform: "scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY("+ PoAtual.toString()+"deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg) " }
        ], {
            // timing options
            duration: 2000,
            iterations: 1
        });  
        document.getElementById("cube4").style.msTransform = "rotatey("+PoAtual.toString()+"deg)"; 
        // Standard syntax
        document.getElementById("cube4").style.transform = "rotatey("+PoAtual.toString()+"deg)";  
    }
/*====================================================================================================
    Função: PegaBase()
    Motivo: Responsavel por receber a base Decimal ou Binaria para ser operada no fonte
    Data: 05/04/2023
    Programadores(As): Ighor Drummond
======================================================================================================*/
    function PegaBase(){
        var selectbase = document.querySelector('#operacao1'); //Recebe o select e seus indexs da casa decimal ou binaria
        base = selectbase.options[selectbase.selectedIndex].value;
    }
/*
    Hikelmi, já montei a logica de pegar os registros (R1, R2, R3 e R0) sendo essa variavel um vetor de 4 posições (que se chama registro), fiz também 
    uma outra variavel que é vetor de 3 posições ao qual retorna os Rns Escolhidos pelo usuario, em cada posição é armazenado um Rn desejado pelo usuario:
    Variavel = escolhareg['R0', 'R0', 'R0']
    é tbm visto que os campos são correspondidos por
    escolhareg[C buss, A buss, B buss]
    e ja deixei como padrão, tudo no R0 para ficar certinho dps.
    Fiz também a coleta da operação matemtica que o usuario quer sendo a variavel responsavel por isso = valorSelect
    E completei também pegando se o usuario deseja operacao binaria ou decimal, sendo a variavel 'base'.
    está tudo pronto para montar a logica, me chamar quando for começar pq tenho uma instrução para pedir a vc sobre as animações e velocidade.
    Fico no seu aguardo.
*/
