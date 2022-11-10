const inputBox = document.querySelector('.input-field input')
const addBtn = document.querySelector('.input-field button')
const todoList = document.querySelector('.todolist')
const clearAll = document.querySelector('.footer button')
const pendingNum = document.querySelector('.footer pendingNum')


function validData(data){
  if(data.trim() != '') return true;
}
addBtn.addEventListener('click', ()=>{
  let data = inputBox.value 
  const valid = validData(data)
  if(!valid) return;
  let getLocal = localStorage.getItem('Todo')
  if(getLocal == null) {listArr = []}
  else{
    listArr = JSON.parse(getLocal)
  }
  listArr.push(data)
  localStorage.setItem('Todo', JSON.stringify(listArr))
  showTask();
  inputBox.value = '';
})
showTask();
function showTask() {
  let getLocal = localStorage.getItem('Todo')
  if(getLocal == null) {listArr = []}
  else{
    listArr = JSON.parse(getLocal)
  }
  let newTag = "";
  listArr.forEach((ele, index) =>{
    newTag += `<li>
    ${ele} <span onclick="deteleTodo(${index})";><i class="bx bxs-trash-alt"></i></span>
    </li>`
  })
  todoList.innerHTML = newTag
}


function deteleTodo(index){
  let getLocal = localStorage.getItem('Todo')
  if(getLocal == null) {listArr = []}
  else{
    listArr = JSON.parse(getLocal)
  }
  listArr.splice(index, 1)
  localStorage.setItem('Todo', JSON.stringify(listArr))
  showTask()
}


clearAll.addEventListener('click', ()=>{
  listArr = [];
  localStorage.setItem('Todo', JSON.stringify(listArr));
  showTask()
})

inputBox.addEventListener('keyup', (event)=>{
  if(event.keyCode == 13){
    addBtn.click()
  }
})