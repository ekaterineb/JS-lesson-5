const button = document.getElementById("button");

const removeButton = (event) => {
	button.remove()
}
button.addEventListener("click", removeButton);

const img = document.createElement('img');
img.src = 'https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8';
img.alt = 'steet image';
document.body.appendChild(img);

const divBlock = document.createElement("div");
divBlock.innerHTML = '<div id="characters-list"></div>';
const body = document.querySelector("body")
body.appendChild(divBlock);

const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "http://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];

const charDiv = document.getElementById("characters-list");

function renderCharacters() {
    const html = characters.map((el) => {
        return `<div class="character-card">
            <h2>${el.first_name} ${el.last_name}</h2>
            <h3>House: ${el.house}</h3>
            <img src="${el.image}" alt="${el.first_name} ${el.last_name}">
            <p>Actor: ${el.actor}</p>
        </div>`;
    });

    charDiv.classList.add('character-card-position');

    charDiv.innerHTML = html.join("");
}

renderCharacters();
