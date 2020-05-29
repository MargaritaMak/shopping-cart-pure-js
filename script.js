import { getFromBackEnd } from './utils/http.js';


const elem1 = document.getElementById('images');
const cartIcon = document.getElementById('cart');
let cart = [];

getFromBackEnd().then(data => {
    let shopItems = ''
    data.forEach((item, index) => {
        shopItems += `
        <div class="Iphone">
        <img src = ${item.img}>
        <p class ='name'> ${item.title}</p>
        <p class = 'price'> ${item.price}</p>
        <button class ='addToCart' data-id = ${item.id}> Add to cart </button>
        </div>`
    })
    elem1.innerHTML = shopItems;
  

const elems = document.getElementsByClassName('addToCart')
for(let i = 0; i < elems.length; i++){
    const elem = elems[i];
    elem.onclick =function(e){
        const currentElemId = e.target.dataset.id;
        if(cart.includes(currentElemId)){
            return alert('Already in cart');
        } else {
            cart.push(currentElemId)
        }
        cartIcon.innerHTML = `<span> ${cart.length}<span>`
    }
}
})




