function validar(formulario){
    var check_numbers="0123456789";

    if(formulario.telefono.value.lenght!=8){
        alert("El tamaño del telefono es incorrecto");
        formulario.telefono.focus();
        return false;
    }
    var checkStr = formulario.telefono.value;

    var allValid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for( var j = 0; j < checkOk.length; j++)
        if(ch == checknumbers.charAt(j))
            break;
        
        if(j == checknumbers.length){
            allValid = false;
            break;
        }
    }
    var checkname="QWERTYUIOPASDFGHJKLÑZXCVBNM qwertyuiopasdfghjklñzxcvbnm";
    var validname=true;
    var checkmessage="QWERTYUIOPASDFGHJKLÑZXCVBNM qwertyuiopasdfghjklñzxcvbnm1234567890";
    var validmessage=true;
    var check2 = formulario.mensaje.value;
    var check = formulario.nombre.value;
    for(var i = 0; i < check.length; i++){
        var ch = check.charAt(i);
        for( var j = 0; j < checkname.length; j++)
        if(ch == checkname.charAt(j))
            break;
        
        if(j == checkname.length){
            validname = false;
            break;
        }
    }
    if(!validname){
        alert("Escribe solo letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }
    for(var i = 0; i < check2.length; i++){
        var ch = check2.charAt(i);
        for( var j = 0; j < checkmessage.length; j++)
        if(ch == checkmessage.charAt(j))
            break;
        
        if(j == checkmessage.length){
            validmessage = false;
            break;
        }
    }
    if(!validmessage){
        alert("Escribe solo letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }
    if(!allValid){
        alert("Solo se aceptan letras en el numero telefonico");
        formulario.telefono.focus();
        return false;
    }
    var txt = formulario.email.value;
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    alert("Email" + (b.test(txt)?"":" no ") + " valido");
    return b.test(txt);

}