import data from "../../data.js";
const cardContainer = document.querySelector("#card-container");
let currentHtml = "";

const newData = data.map((producto) => {
  const info = {
    price: producto.price,
    category: producto.category,
    image: producto.image,
    desc: producto.description,
    id: producto.id,
    title: producto.title,
  };
  return info;
});


function showAllCards(){
  newData.forEach((product) => {
    currentHtml += `<div class="card">
          <img
            class="card__img"
            src=${product.image}
            alt=""x
          />
          <div class="card__content">
          <h1>${product.title}</h1>
            <span class="card__price">Precio ${product.price}</span>
            <span class="card__category">Categoria ${product.category}</span>
            <p class="card__desc">
              ${product.desc}
            </p>
          </div>
        </div>`;
  });
  cardContainer.innerHTML = currentHtml;
}

showAllCards()




const searchBar = document.querySelector("#search")
const searchButton = document.querySelector("#searchButton")
const searchDiv = document.querySelector("#searchBar")

searchButton.addEventListener("click", function(){
    let searchContent = search.value;

    if(searchContent === ""){
      showAllCards()
    }else{
      let searchedItem = newData.find((data) => (data.title === searchContent))
      if(searchedItem !== undefined){
        cardContainer.innerHTML = `<div class="card">
        <img
          class="card__img"
          src=${searchedItem.image}
          alt=""x
        />
        <div class="card__content">
        <h1>${searchedItem.title}</h1>
          <span class="card__price">Precio ${searchedItem.price}</span>
          <span class="card__category">Categoria ${searchedItem.category}</span>
          <p class="card__desc">
            ${searchedItem.desc}
          </p>
        </div>
      </div>`
      }else{
        alert(searchContent + " No existe!")
        showAllCards()
      }
    
    }

    
})