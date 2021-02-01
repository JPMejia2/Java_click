//var precio = prompt("precio")

//if (precio >= 100){
    
 //   var condescuento = precio - (precio*10/100);
    
 //   alert("Q" + precio + " tiene un 10% de descuento total a pagar: Q"+ condescuento)

//}




//else{
//    alert(" precio completo")
//}

var user = prompt("Usuario:")

if (user== "jpmejia"){
    
    var password = prompt ("Contrasena")
    
    if(password == "12345"){
        alert("Hola "+ user)
    }else{
        alert("Contrasena incorrecta")
    }
}
else{
    alert("Usuario no encontrado")
}