const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //document.쿼리로 찾을땐 (#todo-form input)
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // put toDos array to localStorage / stringify = object/array -> string
}

function deleteToDo(event) {
    // console.log(event.target.parentElement.innerText); 이렇게 값도 볼 수 있다.
    // console.log(event.target.parentElement); // target은 클릭된 html, parentElement는 클릭된 element의 부모 property
    const li = event.target.parentElement; //
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 우리가 click 한 li만 빼고 리스트 다시 만들어서 assign 해줘
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span"); //아직 span은 li안에 있지 않다.
    span.innerText = newTodo.text; // span의 text를 받은 object의 텍스트로 <li><span>text</span></li>
    const button = document.createElement("button");
    // button.innerText = "❌";
    button.innerText = "x";
    button.classList.add("button-45");
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // 그래서 안에 붙여주기
    li.appendChild(button); // 그래서 안에 붙여주기
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; // 저장해주고 인풋에서 빼주기
    const newToDoObj = {
        text: newToDo,
        id: Date.now(), // array방식은 뭘 지우는지 잘 모르니까 date.now가 거의 랜덤값이니 이걸로 id를 주자.
    };
    toDos.push(newToDoObj); // toDos array에 저장한 값 넣어주기 (local storage는 array 넣기가 불가함 - 텍스트만 가능)
    paintToDo(newToDoObj); // 새 todo를 보여주기
    saveToDos(); // array를 local에 save하기
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// (savedToDos !== null) 만약 저장한 todos가 있다면
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos); // parse = string -> object/array
    toDos = parsedToDos; // local storage에 있으면 toDos에 일단 넣고 시작 (유저 인풋 받기 전에)
    parsedToDos.forEach(paintToDo); // 위랑 같은데 더 짧은 버전. paintToDo는 text를 받는데 js가 그 텍스트를 paintToDo에 전달해줌
}
