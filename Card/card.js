console.log("sas")

let container = document.querySelector(".card_container .content")








function createCard({ src, title, prices, category }) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardContent = document.createElement('div');
    const heading = document.createElement('h2');
    const colors = document.createElement('div');
    const purchase = document.createElement('div');
    const price = document.createElement('div');
    const button = document.createElement('button');
    const card_info = document.createElement("div");
    card.classList.add('card');
    cardContent.classList.add('card_content');

    
    img.src = src;
    heading.innerText = title
    colors.classList.add('colors');
    colors.innerText = category

    purchase.classList.add('purchase');


    price.classList.add("price")
    price.innerText = "$" + prices + "0"


    button.innerText = "add to cart"



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