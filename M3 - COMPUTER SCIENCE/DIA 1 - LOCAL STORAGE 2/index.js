const inputsNodeList = document.querySelectorAll(".formulario__input")
const btn = document.querySelector("#btn")
let datos = {}


function enviarDatos (evento){
    evento.preventDefault()
    for(let i = 0; i< inputsNodeList.length; i++){
        const input = inputsNodeList[i]
        if(input.value === ""){
            alert("Completa el campo " + input.name)
        }else{
           datos = {...datos, [input.name]: input.value}
        }
     }
     console.log(datos);
}



btn.addEventListener("click", function(evento){
  enviarDatos(evento)
})