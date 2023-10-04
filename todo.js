const toDoForm = document.getElementById("todo-form");
console.log(toDoForm);
const toDoInput = toDoForm.querySelector("input");
//toDoInput = document.getElementById("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; 
//const toDos : application이 실행될 때 항상 비어있음
//let으로 바꿔서 업데이트가 가능하도록 만든다.

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) { //event : click에 대한 이벤트
    const li = event.target.parentElement; //리스트에서 클릭한 요소를
    li.remove(); //삭제
    console.log(typeof(li.id));
    toDos = toDos.filter((todoObj) => todoObj.id !== parseInt(li.id));
    //내가 클릭한 id 제외한 나머지만 남긴다
    saveToDos();
}


//todo를 그리는 paintToDo function (argument : text)
function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span); //li는 span이라는 자식을 갖고
    li.appendChild(button);
    toDoList.appendChild(li);
}

//새로고침을 막고 enter를 누르면 비어지게 만들어주는 함수
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //newTodo : 입력창의 text값 (내 할 일 텍스트)
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj); //array에 해야할 일을 저장
    paintToDo(newTodoObj); //객체를 전달
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos) { //투두리스트가 localStorage에 저장되어 있으면
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //전에 있던 todo(parsedToDos)를 toDos에 저장 (이전 할 일을 복원)
    parsedToDos.forEach(paintToDo);
    //각각의 item에 대해 sayHello를 실행시킨다
    //forEach -> item을 paintToDo에게 하나씩 넘겨줌
    //지금은 {} object를 하나씩 넘겨줌
}
