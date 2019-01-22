const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

let itemsArray = JSON.parse(localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));

function liMaker (text) {
	const li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
}

form.addEventListener('submit', function(e) {
	e.preventDefault();

	itemsArray.push(input.value);
	localStorage.setItem('items', JSON.stringify(itemsArray));

	liMaker(input.value);
	input.value = "";
});

itemsArray.forEach(item => {
	liMaker(item);
});

button.addEventListener('click', function () {
	localStorage.clear();

	while (ul.firstChild) {
		ul.removeChild(firstChild);
	}
});