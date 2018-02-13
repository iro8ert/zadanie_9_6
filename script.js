
document.addEventListener("click", add);


function add() {
	document.getElementById('myButton');
  	var a = document.createElement('li');
  	document.getElementById('list').appendChild(a);
  	for (var i = 0; i < document.getElementsByTagName('li').length ; i++) {
    	a.innerHTML = "item" + i;
  	}
}