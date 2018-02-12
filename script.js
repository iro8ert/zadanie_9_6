document.getElementById('myButton').addEventListener("click", add);


function add() {
  var a = document.createElement('li');
  document.getElementById('list').appendChild(a);
  for (var i = 1; i < document.getElementsByTagName('li').length ; i++) {
    a.innerHTML = "item" + i;
  }
}