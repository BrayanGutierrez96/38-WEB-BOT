const escritorTareas = document.querySelector("#input")
const submit = document.querySelector("#submit")
const div = document.querySelector("#lista")



submit.addEventListener("click", agregarTarea)

function agregarTarea(){
    const listDiv = document.createElement("div")
    const newList = document.createElement("input")
    const newListText = document.createElement("p")
    newList.type = "checkbox"
    newListText.innerHTML = escritorTareas.value;
    newListText.style.borderColor = "black";
    newListText.style.fontSize = "30px"
    newListText.style.border = "1px, solid, black"
    newList.style.borderSpacing = "2px"
    listDiv.style.display = "flex"

    listDiv.appendChild(newListText)
    listDiv.appendChild(newList)
    div.appendChild(listDiv);


    newList.addEventListener("change", function(event) {


        const checkbox = event.target;
        const textoAsociado = checkbox.parentNode.querySelector("p");

        if(checkbox.checked){
            textoAsociado.style.textDecoration = "line-through"
        }else{
            textoAsociado.style.textDecoration = "none"
        }
})
escritorTareas.value = "";
}