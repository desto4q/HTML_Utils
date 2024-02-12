console.log("sas")

let container = document.querySelector(".card_container .content")








function createCard({ src, title, prices, category }) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card_content');

    const img = document.createElement('img');
    img.src = src;

    const heading = document.createElement('h2');
    heading.innerText = title

    const colors = document.createElement('div');
    colors.classList.add('colors');
    colors.innerText = category
    const purchase = document.createElement('div');
    purchase.classList.add('purchase');

    const price = document.createElement('div');
    price.classList.add("price")
    price.innerText = "$" + prices + "0"

    const button = document.createElement('button');
    button.innerText = "add to cart"


    let card_info = document.createElement("div");
    card_info.classList.add("card_info")



    purchase.appendChild(price);
    purchase.appendChild(button);

    card_info.appendChild(heading)
    card_info.appendChild(colors)

    card_info.appendChild(purchase)


    cardContent.appendChild(img);
    cardContent.appendChild(card_info)


    card.appendChild(cardContent);

    return card;
}




let fetcher = async () => {
    let { products: data } = await fetch("https://dummyjson.com/products/category/mens-shoes?limit=4").then(res => {
        return res.json()
    })
    data.forEach((e) => {
        console.log(e)
        console.log(e.title)
        container.appendChild(createCard({ src: e.images[0], title: e.title, prices: e.price, category: e.category }))
    })
    return data
}
fetcher()