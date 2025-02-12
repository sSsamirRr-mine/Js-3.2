'use strict';

const body = document.querySelector("#body")
const dark = document.querySelector("#dark")
const root = document.documentElement
const input = document.querySelector("input")

fetch("https://jsonplaceholder.typicode.com/users")
    .then(Users => Users.json())
    .then(info => {
        RenderData(info);
        search(info);
    });


function CreateCard(info) {

    const card = document.createElement("div")
    const Name = document.createElement("h2")
    const humanImg = document.createElement("i")
    const gmail = document.createElement("p")
    const number = document.createElement("p")
    const HomeWarp = document.createElement("p")

    Name.innerHTML = info.name
    gmail.innerHTML = info.email
    number.innerHTML = info.phone
    HomeWarp.innerHTML = info.address.city

    card.classList = "card"
    Name.classList = "name"
    gmail.classList = "p-font"
    number.classList = "p-font"
    HomeWarp.classList = "p-font"
    humanImg.classList.add("fa-solid", "fa-user", "imgHuman");

    card.appendChild(Name)
    card.appendChild(humanImg)
    card.appendChild(gmail)
    card.appendChild(number)
    card.appendChild(HomeWarp)

    body.appendChild(card)

}

function RenderData(info) {
    info.forEach(site => {
        CreateCard(site)
    });
}

dark.addEventListener("click", () => {
    root.classList.toggle("root-dark")
})

function search(name) {
    input.addEventListener("input", () => {
        body.innerHTML = "";

        let filtered = name.filter((site) => {
            return site.name.toLowerCase().trim().includes(input.value.toLowerCase().trim());
        });

        filtered.forEach(Item => {
            CreateCard(Item);
        });
    });
}
