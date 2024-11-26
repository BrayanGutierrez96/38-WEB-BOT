function saludo (nombre, callback){
    console.log("hola," + nombre);
    callback();
}

function despesdirse (){
    console.log("Adion!")
}

saludo("Sara" , despesdirse);