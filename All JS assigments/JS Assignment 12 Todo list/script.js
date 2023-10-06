
//first onlick of add button the input item is show into the list of ul
function List(){
//first add variable of input and ul
let input = document.getElementById('input')
let listNo = document.getElementById('listNo')

//add li element in html and made buttons of delete and edit
let listItem = document.createElement('li')
let editBtn = '<button class="addBtn" onclick="editItem(event)">EDIT</button>     '
let deleteBtn = '<button class="addBtn" onclick="delItem(event)">DELETE</button>   '
listItem.innerHTML = '<span>'+ input.value +'</span>' +editBtn +'     ' +deleteBtn
listItem.className = 'listItem'
listNo.append(listItem)
cls() 
}
function delItem(e) {
    //list ko delete krna h delete button pr click ho tw
     let delEle = e.target.parentElement
     delEle.remove()

}

function editItem(e){
    //age edit btn pr click ho tw list ka text chla jae input me or phr waha se hm chng kr k phr se list me update krden
    let input = document.getElementById('input')
    let popUp = e.target.previousSibling
    popUp.className ='editing'
     input.value = popUp.innerHTML
    let addBtn = document.getElementById('add')
    addBtn.className = 'hide'
   let updat = document.getElementById('updat')
   updat.classList.remove('hide')
   updat.className = 'addBtn'
}


function update() {
    let input = document.getElementById('input');
    let addBtn = document.getElementById('add');
    addBtn.classList.remove('hide');
    addBtn.className = 'addBtn'
    let updat = document.getElementById('updat');
    updat.className = 'hide';

    let editedItem = document.querySelector('.editing'); // Find the currently editing item
    // let span = editedItem.querySelector('span'); // Find the span inside the editing item
    editedItem.textContent = input.value; // Update the text of the span

    // Clear the input field
    input.value = '';

    // Remove the 'editing' class from the edited item
    editedItem.classList.remove('editing');
}

  
function cls(){
    let input = document.getElementById('input')
    input.value = ''
}
function deleteAll (){
    let ulElement = document.getElementById('listNo')
    ulElement.innerHTML = ''
}