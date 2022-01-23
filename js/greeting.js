const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 대문자인 것은 string만 담겼기 때문에. convention
const USERNAME_KEY = "username"; // string은 오류를 못잡아주지만 변수명은 js가 오류를 잡아준다. 그니까 변수로 쓰자.

function onLoginSubmit(event) {
    event.preventDefault(); // event에는 브라우저가 기본 동작을 하지 않도록 하는 정보도 있음(?)
    loginForm.classList.add(HIDDEN_CLASSNAME); // input form 숨기기
    const username = loginInput.value; // .dir(loginInput)해보고 .value라는걸 찾아서 input에서 받아오게 해서 변수로 저장
    localStorage.setItem(USERNAME_KEY, username); // * 새로고침 해도 저장되도록 localStorage에 저장해두기
    paintGreetings(); // form input에서 네임 받아옴
}

// username을 받거나 이미 존재할 때 greeting을 보여준다.
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; // username으로 gretting 만들기 = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME); // hidden greeting 보이기
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 1. 로컬 스토리지에 있는지 체크 2. greeting에 사용

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 없으믄 form hidden을 지워서 보이게 하고
    loginForm.addEventListener("submit", onLoginSubmit); // 버튼 눌리는거 listen
} else {
    paintGreetings(savedUsername); // localStorage에서 네임 받아옴
}

// // Remove btn
// const removeBtn = document.querySelector(".remove_storage");
// function removeStorage() {
//     localStorage.removeItem("username");
//     window.location.reload();
// }
// removeBtn.addEventListener("click", removeStorage);
