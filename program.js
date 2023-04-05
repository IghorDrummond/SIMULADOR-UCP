
/*=====================================================================================================================/*
    Fonte: program.js 
    Motivo: Responsavel pela logica e funcionamento do html 'index.html' ao qual simula uma movimentação de registro.
    Data: 04/04/2023
    Programador: Ighor Drummond, Hikelmi Santos
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
    var base = ""; //recebe se vai trabalhar na base decimal ou binaria
    var Total = 0; //recebe o valor total após a operação escolhida
    var posicOp = 0//Guarda a posição anterior do cubo de operacao matematica
    var binario = 0; //recebe o valor binario
    var resto = 0; //recebe o valor resto da divisão para binario
    var cont = 0; //usado para laços do tipo 'For'
    var posic = [0,0,0,0]; //usado para gaurdar alguns criterio estabelecido dos cubos
    var numReg = 0; //usado para apontar dentro do array registro
    var valorSelect = "" //Responsavel por receber o valor da operação matematica escolhida pelo usuario

    window.alert("Versão 1.4.8 - Alpha");//balão apenas para indicar que o site está na versão alpha - sera removido após a conclusão
    desconsole = "Seja bem-vindo ao Console da pagina! Este projeto foi desenvolvido a fins academicos para simular uma movimentação";
    desconsole += " de registro."
    console.log(desconsole);

/*===============================================================
    Função: Registro(Recebe o Rn digitado)
    Motivo: responsavel por pegar os valores dos R0, R1, R2 e R3
    Data: 04/04/2023
    Programador: Ighor Drummond
=================================================================*/
    function Registro(numReg){ 
        registro[numReg] = document.getElementById("getdados").value;
    }

/*==============================================================================================
    Função: BotaoCubo(soma 90 graus a mais, cubo correspondente)
    Motivo: Aciona a animação do cubo correspondente e calcula o graus de deslocamento no eixo Y
    Data: 05/04/2023
    Programador: Ighor Drummond
================================================================================================*/
    function BotaoCubo(nGraus, botao){
        if(posic[botao] != 360){
            posic[botao] += nGraus;
        }
        else{
            posic[botao] = 0;
            posic[botao] += nGraus;
        }
        window.alert(posic);
        animacubo(posic,botao);//Responsavel por posicionar o cubo no eixo Y
        SelecionaRegistro(posic[botao], botao);//aqui ele selecionara o registro escolhido
    }
/*===========================================================
    Função: animacubo(graus, cubo correspondente)
    Motivo: Anima a trajetoria dos cubos após aperta o botão
    Data: 05/04/2023
    Programador: Ighor Drummond
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
    Programador: Ighor Drummond
======================================================================================================*/
    function OperacaoMath(){ 
        var select = document.getElementById("operacao")//responsavel por pegar o valor do select escolhido
        var animacao = ""

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
    Programador: Ighor Drummond
======================================================================================================*/
    function SelecionaRegistro(posic, botao){
        if(posic[botao] == 360){
            escolhareg[botao] = "R0";
        }
        else if(posic[botao] == 90){
            escolhareg[botao] = "R3";
        }
        else if(posic[botao] == 180){
            escolhareg[botao] = "R2";
        }
        else if(posic[botao] == 270){
            escolhareg[botao] = "R1";
         }
         window.alert(escolhareg);
    }
/*====================================================================================================
    Função: RotacionaCubo(Posicição anterior, Posição que será a atual)
    Motivo: Responsavel por Rotacionar o cubo da operação matematica para o eixo Y
    Data: 05/04/2023
    Programador: Ighor Drummond
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