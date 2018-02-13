
function add() {
	var a = document.createElement('li');
  	document.getElementById('list').appendChild(a);
  	for (var i = 0; i < document.getElementsByTagName('li').length ; i++) {
    	a.innerHTML = "item" + i;
  	}
}


function load() {
	var myButton = document.getElementById('myButton');
	myButton.addEventListener('click', add);
}

