window.addEventListener('load', init);

const url = "./JSON/main.json"
const menuContainer = document.querySelector(".menu-container")

function init() {
    getDishes(url, showDishes)
}

function getDishes (url, succesHandler) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("er was een error :(" + response.status)
            }
            return response.json()
        })
        .then(succesHandler)
        .catch(err => console.log(err))
}

function showDishes (data) {
    const catagorys = data.catagorys
    for (let catagory of catagorys) {
        const h2 = document.createElement("h2")
        const div = document.createElement("div")
        const space = document.createElement("div")
        const img = document.createElement("img")
        const ul = document.createElement("ul")

            h2.innerHTML = catagory.name
            h2.classList.add("catagory")

            h2.appendChild(div)

            img.src = `./images/${catagory.name}.jpg`
        img.classList.add("dish-image")
            if (catagory.name === "Hoofdgerechten") {
                img.alt = "Lekkere hamburger met gehakt, kaas en groente."
                div.classList.add("dish-container")

            } else if (catagory.name === "Bijgerechten") {
                img.alt = "Een kom soep met doorzichtige boullion en verschillende groenten er in."
                div.classList.add("dish-container-reverse")

            } else if (catagory.name === "Nagerechten") {
                img.alt = "een bakje Crème brûlée met een verhard laagje suiker aan de bovenkant."
                div.classList.add("dish-container")

            }

            div.appendChild(img)
            space.classList.add("space")
            div.appendChild(space)

            menuContainer.appendChild(h2)

        for (let dish of catagory.dishes) {
            const liDish = document.createElement("li")
            const liIng = document.createElement("li")

            liDish.classList.add("dish")
            liDish.innerHTML = `${dish.dish} - €${dish.price},-`
            ul.appendChild(liDish)

            liIng.classList.add("ingredients")
            liIng.innerHTML = dish.ingredients
            ul.appendChild(liIng)

            div.appendChild(ul)
        }
    }

    // for (let catagory of catagorys) {
    //     const h2 = document.createElement("h2")
    //     h2.textContent = catagory
    //     menuContainer.appendChild(h2)
    // }
}