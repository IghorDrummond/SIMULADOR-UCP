
/*=====================================================================================================================/*
    Fonte: program.js 
    Motivo: Responsavel pela logica e funcionamento do html 'index.html' ao qual simula uma movimentação de registro.
    Data: 04/04/2023
    Programadores(As): Ighor Drummond, Giovanni Hikelmi
/*=====================================================================================================================*/
/*
===================================
    Declaração das Variaveis
===================================*/
    var desconsole = ""; //Receber mensagem para enviar ao console
    var executar = ""; //Recebe o valor de execução 
    var registro = [0, 0, 0, 0]; //Recebe os valores dos Rns
    var escolhareg = ["R0", "R0", "R0", "R0"] //Recebe registro que serão escolhido pelo usuario
    var acelerar = ""; //Recebe o x para Acelerar 
    var base = "Dec"; //recebe se vai trabalhar na base decimal ou binaria
    var Total = 0; //recebe o valor total após a operação escolhida
    var posicOp = 0//Guarda a posição anterior do cubo de operacao matematica
    var binario = 0; //recebe o valor binario
    var resto = 0; //recebe o valor resto da divisão para binario
    var cont = 0; //usado para laços do tipo 'For'
    var posic = [0,0,0,0]; //usado para gaurdar alguns criterio estabelecido dos cubos
    var numReg = 0; //usado para apontar dentro do array registro
    var valorSelect = "+"; //Responsavel por receber o valor da operação matematica escolhida pelo usuario
    var Fala = ["","","",""] //Responsavel por amarzenar as falas do Garcia Achatado
    var velocidade = 5000; //responsavel por administrar a velocidade - valor padrão de 5000 
    var Position = 0; //responsavel por rotacionar o cubo 5 no eixo Y correspondente
    var Controle = "" //Define se a controladora irá operar no modo automatico ou normal
    
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
    Fala[1] += " No 'A Buss...' e no 'B Buss...' é responsavel por apontar qual dos Rns você digitou o valor e qual valor você quer somar, dividir e etc..."
    Fala[1] += " Para escolher a operação, selecione no 4º Cubo abaixo da primeira tabela, o campo com valor padrão de 'A+B', Após isso aperte em 'Executar'"
    Fala[1] += " Fique a vontade para desfrutar do programa 'OH VEIO!'."
    //ao iniciar a pagina, já é carregado a fala padrão do garcia achatado
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("achatadofala").innerHTML = Fala[1];

    });
    Fala[2] = "O processador se comunica com a memória principal através do barramento de endereços e do barramento de dados." 
    Fala[2] += " O barramento de endereços é usado para enviar o endereço da memória que o processador deseja acessar e o barramento de dados é" 
    Fala[2] += " usado para enviar os dados que serão lidos ou escritos na memória." 

    Fala[3] = "A Unidade Lógica e Aritmética (ULA) realiza as principais operações lógicas e aritméticas do computador. "
    Fala[3] += "Ela executa funções aritméticas como soma, subtração, divisão e determina se um número é positivo ou negativo ou se é zero."
    Fala[3] += " A ULA está envolvida principalmente em operações lógicas e matemáticas, incluindo operações de troca de bits." 

    Fala[4] = "É coletado as informações (dados), e depois esses dados são enviados para os endereços A e B respectivamente," 
    Fala[4] += "após isso esses valores vão para ULA que irá realizar cálculos selecionado, após isso o resultado e enviado para a memória C." 

    Fala[5] = "No final o resultado é enviado para o registrador representado pelo endereço C (R0, R1, R2 ou R3)."
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
    Programadores(As): Ighor Drummond, Giovanni Hikelmi
======================================================================================================*/
    function PegaBase(){
        var selectbase = document.querySelector('#operacao1'); //Recebe o select e seus indexs da casa decimal ou binaria
        base = selectbase.options[selectbase.selectedIndex].value;
        Converte_dec_bin() //Converte os valores dos registradores de binario para decimal e vice-versa
    }
/*====================================================================================================
    Função: Velocidade()
    Motivo: Responsavel por determinar quantos segundos uma animação irá durar
    Data: 06/04/2023
    Programadores(As): Ighor Drummond
======================================================================================================*/
    function Velocidade(){
        var selectvelo = document.querySelector('#velocidade'); //Recebe o select e seus indexs da casa decimal ou binaria
        var numero = "";
        numero = selectvelo.options[selectvelo.selectedIndex].value;

        if(numero == "1.5"){
            velocidade = 2500;
        }
        else if(numero == "2"){
            velocidade = 1000;
        }
        else{
            velocidade = 5000;
        }
    }
/*====================================================================================================================================
    Função: ValorCubo(Recebe o valor total de uma operação de dois registro)
    Motivo: Responsavel por determinar a rotação e qual é o tipo do numero, se o resultado for zero, ele mostra zero e assim em diante.
    Data: 06/04/2023
    Programadores(As): Ighor Drummond
=======================================================================================================================================*/
    function ValorCubo(Total){

        if(Total > 0){
            Position = 90;
        }
        else if(Total < 0){
            Position = 180;
        }
        else{
            Position = 0;
        }
        
        document.getElementById("cube4").animate([
            // keyframes
            { transform: "scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg) " },
            { transform: "scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY("+ Position.toString()+"deg) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg) " }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });  
        document.getElementById("cube5").style.msTransform = "rotatey("+Position.toString()+"deg)"; 
        // Standard syntax
        document.getElementById("cube5").style.transform = "rotatey("+Position.toString()+"deg)";  
    }
/*====================================================================================================
    Função: controleSFW()
    Motivo: Defini se será automatico ou não a controladora de dados
    Data: 06/04/2023
    Programadores(As): Ighor Drummond
======================================================================================================*/
    function controleSFW(){
        var selectControl = document.querySelector('#Controle'); //Recebe o select e seus indexs da casa decimal ou binaria
        Controle = selectControl.options[selectControl.selectedIndex].value;
    }

/*====================================================================================================
    Função: calculador()
    Motivo: Lê a base numérica para fazer o cálculo conforme sua base numérica
    Data: 23/04/2023
    Programadores(As): Giovanni Hikelmi
======================================================================================================*/
    function calculador(){

        if(registro[0] == NaN){
            registro[0] == 0
        }
        if(registro[1] == NaN){
            registro[1] == 0
        }
        if(registro[2] == NaN){
            registro[2] == 0
        }
        if(registro[3] == NaN){
            registro[3] == 0
        }

        if(base == "Dec"){
            calcula_dec()
        }
        else if (base == "Bin"){
            calcula_bin()
        }   
    }
/*====================================================================================================
    Função: calcula_dec()
    Motivo: Responsavel por fazer os cálculos matemáticos decimais e binários após a conversão para decimal
    Data: 23/04/2023
    Programadores(As): Giovanni Hikelmi
======================================================================================================*/
    function calcula_dec(){
        var val1, val2
        var auxiliar

        document.getElementById("display").textContent = ''
        document.getElementById("registro").textContent = ''

        //Busca o valor do Barramento A
        if(escolhareg[2] == "R0"){
            val1 = registro[0]
        }
        else if(escolhareg[2] == "R1"){
            val1 = registro[1]
        }
        else if(escolhareg[2] == "R2"){
            val1 = registro[2]
        } 
        else if(escolhareg[2] == "R3"){
            val1 = registro[3]
        }

        //Busca o valor do Barramento B
        if(escolhareg[3] == "R0"){
            val2 = registro[0]
        }
        else if(escolhareg[3] == "R1"){
            val2 = registro[1]
        }
        else if(escolhareg[3] == "R2"){
            val2 = registro[2]
        }
        else if(escolhareg[3] == "R3"){
            val2 = registro[3]
        }

        val1 = Number(val1)
        val2 = Number(val2)
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Animação dos barramentos indo para o CPU
Programadores(As): Giovanni Hikelmi, Ighor Drummond
Data: 28/04/2023
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
    //Escopo reservado para animação
        document.getElementById("achatadofala").innerHTML = Fala[2]
        document.getElementById("barramento").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });  
        document.getElementById("barramento2").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });  
        document.getElementById("barramento3").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });  
        document.getElementById("barramento4").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });  
        document.getElementById("barramento5").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });     
  
        //Espera um tempo para mostrar o valor na CPU
    setTimeout(function(){
        document.getElementById("achatadofala").innerHTML = Fala[3]
        document.getElementById("processadorbase").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });   
        document.getElementById("processador").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });  
        if(base == "Dec"){
            document.getElementById("display").textContent = String(val1) + valorSelect + String(val2)
        }
        else if(base == "Bin"){
            document.getElementById("display").textContent = parseInt(val1).toString(2) + valorSelect + parseInt(val2).toString(2)
        }
    }, velocidade)      
        

        if(valorSelect == "+"){
            Total = val1 + val2
        }
        else if(valorSelect == "-"){
            Total = val1 - val2
        }
        else if(valorSelect == "*"){
            Total = val1 * val2
        }
        else if(valorSelect == "/"){
            Total = val1 / val2
        }
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Animação dos barramentos indo do CPU para o Registrador
Programadores(As): Giovanni Hikelmi, Ighor Drummond
Data: 28/04/2023
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
    setTimeout(function(){
        document.getElementById("achatadofala").innerHTML = Fala[4]
        document.getElementById("barramento6").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });  
        document.getElementById("barramento7").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });  
        document.getElementById("barramento8").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });  
        document.getElementById("barramento9").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });  
        document.getElementById("barramento10").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });     
    }, velocidade*2)

     //Espera um tempo para mostrar o valor no registrador
    setTimeout(function(){
        document.getElementById("achatadofala").innerHTML = Fala[5]
        document.getElementById("controladora").animate([
            // keyframes
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" },
            { border: "yellow 4px solid" },
            { border: "black 4px solid" }
        ], {
            // timing options
            duration: velocidade,
            iterations: 1
        });    
        if(base == "Dec"){
            document.getElementById("registro").textContent = String(parseInt(Total))
        }
        else if(base == "Bin"){
            document.getElementById("registro").textContent = parseInt(Total).toString(2)
        }
    }, velocidade*3)

        auxiliar = -1
        if (Controle == "Automatico" || escolhareg[1] == "R3"){
            registro[3] = Total
            if(base == "Dec"){
                auxiliar = 3
            }
        }
        else if(escolhareg[1] == "R0"){
            registro[0] = Total
            if(base == "Dec"){
                auxiliar = 0
            }
        }
        else if(escolhareg[1] == "R1"){
            registro[1] = Total
            if(base == "Dec"){
                auxiliar = 1
            }
        }
        else if(escolhareg[1] == "R2"){
            registro[2] = Total
            if(base == "Dec"){
                auxiliar = 2
            }
        }
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Animação dos barramentos indo do Controladora para a Memoria Ram
Programadores(As): Giovanni Hikelmi, Ighor Drummond
Data: 28/04/2023
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
        setTimeout(function(){
            document.getElementById("memoriaram").animate([
                // keyframes
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" }
            ], {
                // timing options
                duration: velocidade,
                iterations: 1
            }); 
            document.getElementById("memoriaram2").animate([
                // keyframes
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" }
            ], {
                // timing options
                duration: velocidade,
                iterations: 1
            }); 
            document.getElementById("memoriaram3").animate([
                // keyframes
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" }
            ], {
                // timing options
                duration: velocidade,
                iterations: 1
            }); 
            document.getElementById("memoriaram4").animate([
                // keyframes
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" }
            ], {
                // timing options
                duration: velocidade,
                iterations: 1
            }); 
            if (auxiliar >= 0 && auxiliar <= 3){
                document.getElementById(`getdados${auxiliar}`).value = parseInt(registro[auxiliar])
            }
        }, velocidade*4)        
    }
/*====================================================================================================
    Função: calcula_bin()
    Motivo: Converte binário para decimal para realizar cálculos, depois retorna os valores em binário
    Data: 23/04/2023
    Programadores(As): Giovanni Hikelmi
======================================================================================================*/
    function calcula_bin(){
        var indice
        for(indice = 0; indice < 4; indice++){
            registro[indice] = parseInt(String(registro[indice]), 2)
            //document.getElementById(`getdados${indice}`).value = parseInt(String(registro[indice]))
        }

        calcula_dec()
        
        for(indice = 0; indice < 4; indice++){
            registro[indice] = parseInt((parseInt(registro[indice])).toString(2))
        }
        
        //Espera um tempo para mostrar o novo calor no input do registrador
        setTimeout(function(){
            document.getElementById("memoriaram").animate([
                // keyframes
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" }
            ], {
                // timing options
                duration: velocidade,
                iterations: 1
            }); 
            document.getElementById("memoriaram2").animate([
                // keyframes
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" }
            ], {
                // timing options
                duration: velocidade,
                iterations: 1
            }); 
            document.getElementById("memoriaram3").animate([
                // keyframes
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" }
            ], {
                // timing options
                duration: velocidade,
                iterations: 1
            }); 
            document.getElementById("memoriaram4").animate([
                // keyframes
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" },
                { border: "yellow 4px solid" },
                { border: "black 4px solid" }
            ], {
                // timing options
                duration: velocidade,
                iterations: 1
            }); 
            document.getElementById('getdados0').value = parseInt(registro[0])
            document.getElementById('getdados1').value = parseInt(registro[1])
            document.getElementById('getdados2').value = parseInt(registro[2])
            document.getElementById('getdados3').value = parseInt(registro[3])
        }, velocidade*4)

    }

/*====================================================================================================
    Função: Converte_dec-bin()
    Motivo: Converte a base de decimal para binário e vice-versa e sobrescreve os inputs dos registros
    Data: 23/04/2023
    Programadores(As): Giovanni Hikelmi
======================================================================================================*/
    function Converte_dec_bin(){
        var indice

        if (base == "Bin"){
            for(indice = 0; indice < 4; indice++){
                registro[indice] = parseInt(parseInt(registro[indice]).toString(2))
                document.getElementById(`getdados${indice}`).value = parseInt(registro[indice])
            }
        }
        else if (base == "Dec"){
            for(indice = 0; indice < 4; indice++){
                registro[indice] = parseInt(String(registro[indice]), 2)
                document.getElementById(`getdados${indice}`).value = parseInt(registro[indice])
            }
        }
    }