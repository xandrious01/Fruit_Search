const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let filtered = fruit.map(item => item.toLowerCase()).filter(item => item.includes(str));
	if (filtered.length > 0) {
		results = [...filtered];
	}
	return results;
}

function showSuggestions(results, inputVal) {
inputVal = input.value;
suggestions.classList.add("has-suggestions");
if (suggestions.children.length !== results.length) {
	let toRemove = Array.from(suggestions.children).filter(item => !item.id.includes(inputVal));
	toRemove.forEach(item => 
		suggestions.removeChild(item.parentElement));
}
results.forEach(item => {
	if (document.getElementById(item) === null){
	let div = document.createElement("div");
	let listItem = document.createElement("li");
	suggestions.appendChild(div);
	div.appendChild(listItem);
	listItem.id = item;
	listItem.innerText = item;
	listItem.classList.add("suggestion");
	listItem.addEventListener("click", useSuggestion);
	}
})
}


function searchHandler(e) {
let str = e.target.value.trim().toLowerCase();
if (str.length > 0) {
	let results = search(str);
	showSuggestions(results);
}
}



function useSuggestion(e) {
input.value = e.target.innerText;
suggestions.classList.remove("has-suggestions");
while (suggestions.children.length > 0) {
	suggestions.removeChild(suggestions.lastElementChild);
}
}

input.addEventListener('keyup', searchHandler);