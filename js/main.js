
// Open_Cart and Close_Cart

let cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add("active");
}

function close_cart() {
    cart.classList.remove("active");
}



// Open $ Close Menu

let menu = document.querySelector("#menu")

function open_menu() {
    menu.classList.add("active");
}

function close_menu() {
    menu.classList.remove("active");
}


// item_img

let bigimg = document.getElementById("bigimg");

function changeImg(img) {
    bigimg.src = img
}

// Add Items In Cart

var all_proudects_json;

var item_in_cart = document.querySelector(".item_in_cart");
let proudect_cart = [];

function addToCart(id, btn) {

    proudect_cart.push(all_proudects_json[id]);
    btn.classList.add("active");

    getCart();
}

let count_items = document.querySelector(".count_items");

let count_item_cart = document.querySelector(".count_item_cart");

let price = document.querySelector(".price");

let price_cart_head = document.querySelector(".price-cart-head");



function getCart() {

    let total_price = 0;

    let items_c = "";
    for (let i = 0; i < proudect_cart.length; i++) {
        items_c += `
            <div class="item_cart">
                <img src="${proudect_cart[i].img}" alt="">
                <div class="content">
                    <h4>${proudect_cart[i].name}</h4>
                    <p class="price">$${proudect_cart[i].price}</p>
                </div>
                <button onclick = "removeCart(${i})" class="delete_cart"><i  class="fa-solid fa-trash-can"></i></button>
            </div>
        `

        total_price += proudect_cart[i].price;

    }
    item_in_cart.innerHTML = items_c;

    price_cart_head.innerHTML = total_price;

    count_items.innerHTML = `${proudect_cart.length}`;
    count_item_cart.innerHTML = proudect_cart.length;
    price.innerHTML = '$' + total_price;
}


function removeCart(index) {
    proudect_cart.splice(index,1);
    getCart();

    let addToAllCart = document.querySelectorAll(".fa-cart-plus");
    for (let i = 0; i < addToAllCart.length; i++) {
        addToAllCart[i].classList.remove("active")
        

        proudect_cart.forEach(proudect => {
            if (proudect.id == i) {
                addToAllCart[i].classList.add("active");
            }
        })
    }
}

let back_top = document.querySelector(".back_top");

back_top.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
