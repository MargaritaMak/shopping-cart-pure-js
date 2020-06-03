import { getFromBackEnd } from './utils/http.js';


const elem1 = document.getElementById('images');
const cartIcon = document.getElementById('cart');
let cart = [];
const button = document.getElementById('cart-info')
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

getFromBackEnd().then(data => {
    let shopItems = ''
    data.forEach((item, index) => {
        shopItems += `
        <div class="Iphone">
        <img src = ${item.img}>
        <p class ='text-center'> ${item.title}</p>
        <p class = 'text-center'> ${item.price}</p>
        <button class ='addToCart' data-id = ${item.id}> Add to cart </button>
        </div>`
    })
    elem1.innerHTML = shopItems;
  

const elems = document.getElementsByClassName('addToCart')
console.log(elems)
for(let i = 0; i < elems.length; i++){
    const elem = elems[i];
    elem.onclick = function(e){
        const currentElemId = e.target.dataset.id;
        if(cart.includes(currentElemId)){
            return disableButton(elem)
        } else {
            cart.push(currentElemId)
        }
        cartIcon.innerHTML = `<span> ${cart.length}<span>`
    }
}


function disableButton(btn) {
    btn.disabled = true;
  }


  function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


button.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


})
