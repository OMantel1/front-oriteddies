const fetchPromise =
    fetch("https://oriteddies-api.herokuapp.com/api/teddies");

fetchPromise
    .then(response => {
        console.log(response)
        if (response.ok) {
            return response.json();
        } else {
            throw error;
        }
    })
    .then(objects => {
        displayProducts(objects);
        loaderHide();
    })
    .catch((error) => {
        loaderHide()
        displayError(error)
    });



function displayProducts(elt) {
    // console.log(elt);
    let elements = "";
    let itemsElements = document.querySelector(".items");

    elt.forEach(products => {
        elements +=
            `<section class="product__list">
                <a href="page-product.html?id=${products._id}">
                <div class="product__image-small">
                    <img src="${products.imageUrl}" alt="">
                </div>
                <div class="product__infos"> 
                    <div class="productName"  id="${products._id}">${products.name}</div>
                    <div class="productPrice">Prix: ${(products.price / 100)} €</div>
                </div>
                </a>
            </section>`;
    });
    itemsElements.innerHTML = elements;

}

function loaderHide() {
    let loader = document.querySelector(".loader");
    loader.classList.add("hidden");
}

function displayError(elt) {
    let itemsElements = document.querySelector(".items");
    console.error(elt)
    let msg = "";
    msg +=
        `<p> Oops...un erreur<p>`
    itemsElements.innerHTML = msg;
}