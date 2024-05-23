

var getUl = document.getElementById("ul")

function addTodo(){

    var getInp = document.getElementById("inp")
    var getLi = document.createElement("li");
    var liText = document.createTextNode(getInp.value);
    getLi.appendChild(liText)
    getUl.appendChild(getLi)
    getInp.value = '';

    var delBtn = document.createElement('button');
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    getLi.appendChild(delBtn);
    delBtn.setAttribute('onclick','delList(this)')
    
    var updateBtn = document.createElement('button');
    var updateText = document.createTextNode("Update");
    updateBtn.appendChild(updateText);
    updateBtn.setAttribute('onclick', 'updateList(this)');
    getLi.appendChild(updateBtn);
}


function delList(a){
    a.parentNode.remove()
}
function delAll(){
    getUl.innerHTML=''
}
function updateList(a) {
    var newText = prompt("Enter updated task:");
    if (newText !== null && newText.trim() !== '') {
        a.parentNode.firstChild.nodeValue = newText.trim();
    }
}