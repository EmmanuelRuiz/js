//para validar que solo se acepte numeros

function solonumeros(e){
    //capturar entrada de teclado

    //the keyCode property does not
    //work on the onkeypress event in Firefox. 
    //However, the which property does.
    key=e.keyCode || e.which;
    //almacenar la variable key
    //fromcharcode = display the character of the specified unicode number
    teclado=String.fromCharCode(key);
    //numeros aceptados
    numeros="0123456789";
    //caracteres especiales
    //8 tecla barra 37 izq 39 der 46
    especiales="8-37-39-46";

    tecla_especial=false;
    //validar si hay tecla especial
    for(var i in especiales){
        if(key==especiales[i]){

            tecla_especial=true;
        }
    }
    //validar si el caracter se encuentra en la cadena
    //sino encuentra un caracter entre 0-9 y no encuentra tecla especial
    if(numeros.indexOf(teclado)==-1 && !tecla_especial){
        return false;
    }

}

//para asignar cada valor

function retornar(num){
    //capturar lo que haya en valores
    var anterior=document.form.valores.value;

    document.getElementById("valores").value=anterior+num;

}

//para eliminar ultimo caracter

function eliminar(){
    //guardar el valor de la caja
    var anterior=document.form.valores.value;
    //eliminar el ultimo valor
    var nuevovalor=anterior.substring(0,anterior.length-1);
    //setear el nuevo valor
    
    document.getElementById("valores").value=nuevovalor;
}


// para eliminar todo

function eliminar_todo(){
    document.form.valores.value="";
}


//para  validar los signos

function comprobar(num){ 
    var anterior = document.form.valores.value;
    if(anterior==""){
    document.form.valores.value="";
    }else{    
        var anterior = document.form.valores.value;
        document.getElementById("valores").value=anterior+num;
        esto=document.form.valores.value;

        record=0; 
        igual=1; 
        var letraRecord 
        var b=0 
        var letra="" 

        for (a=1;a<esto.length;a++){      
        if (esto.charAt(a)=="+" || esto.charAt(a)=="-" || esto.charAt(a)=="*" || esto.charAt(a)=="/" || esto.charAt(a)=="."){ 
        igual=igual+1; 
        letra=esto.charAt(a);
        }else{ 
             if(igual>record){record=igual;letraRecord=letra} 
                igual=1 
             } 
             b=a 
        }
        
        if(igual>record){
          record=igual;
          letraRecord=letra;
        } 

        if (record>2){
            var anterior = esto;
            var nuevovalor = anterior.substring(0, anterior.length-1);
            document.getElementById("valores").value=nuevovalor;
            record=0;b=0;igual=1;letra="";letraRecord="";
        }     
    } 

}


//realizar las operacionesmatematicas


function calcular(){
    var resultado=eval(document.form.valores.value);

    if(resultado=="Infinity"){
        document.form.valores.value="No se puede dividir entre cero";

    }else{
        document.form.valores.value=resultado;
    }
    
}

function factorial(){
    var numero = document.form.valores.value;
    var resultado = 1;

    for(var i = 1; i <= numero; i++){
        resultado *= i;
    }
    document.form.valores.value= resultado;
}

function parimpar(){
    var numero = document.form.valores.value;

    if(numero % 2 == 0){
        document.getElementById("imprimir").innerHTML = "Es Par";
    } else {
        document.getElementById("imprimir").innerHTML = "Es Impar";
    }
}

