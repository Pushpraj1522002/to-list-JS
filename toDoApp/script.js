const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

//function to add li's to unordered list onClick functoin
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); //it will save the updated content in local storge of the browser.
}

//event listener for checking or unchecking and removeing tasks.
listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

//showing the saved data
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();

