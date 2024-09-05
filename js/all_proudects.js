
// Open & Close Filter

let filter = document.querySelector(".filter");


function openFilter() {
    filter.classList.toggle("active");
}




fetch("js/items.json")
        .then(response => response.json())
        .then(data => {
            

        
            const proudects_dev = document.getElementById("proudects_dev");

            all_proudects_json = data;

            data.forEach(proudect => {

                // 

                const old_price_pra = proudect.old_price ? `<p class="old_price">$${proudect.old_price}</p>` : "";

                    const disc_price_div = proudect.old_price ?  `<span class="percent">%${Math.floor((proudect.old_price -  proudect.price) / proudect.old_price * 100)}</span>` : "";
                    proudects_dev.innerHTML += `
                    
                    <div class="proudect swiper-slide">

                        <div class="icons">
                            <span><i onclick = "addToCart(${proudect.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>

                        ${disc_price_div}

                        <div class="img_proudect">
                            <img src="${proudect.img}" alt="">
                            <img class="img_hover" src="${proudect.img_hover}" alt="">
                        </div>

                        <h3 class="name_proudect"><a href="http://">${proudect.name}</a></h3>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>

                        <div class="price">
                            <p><span>$${proudect.price}</span></p>
                            ${old_price_pra}
                        </div>
                    </div>
                    
                    
                    `
            });

        })