var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.getElementsByTagName("li");
var i;

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var delbut=document.createElement("button");
	delbut.appendChild(document.createTextNode("Delete"));
	li.appendChild(delbut);
	delbut.addEventListener("click",removeelement);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click",function(event){
	var target=event.target;
	target.classList.toggle("done");

})
function deletebutton(){
	var delbut=document.createElement("button");
	delbut.appendChild(document.createTextNode("Delete"));
	listItems[i].appendChild(delbut);
	delbut.addEventListener("click",removeelement);

}
for(i=0;i<listItems.length;i++){
	deletebutton();
}
function removeelement(event){
   event.target.parentNode.remove();
}
