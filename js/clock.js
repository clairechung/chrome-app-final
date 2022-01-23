const clock = document.querySelector("h2#clock"); //just #clock or getelementbyId("clock")
// clock.innerText = "kakaka";
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // int -> str -> padStart 해서 "--:--:--"
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`; //백틱이다. 명심!
}

getClock(); // 아래 인터벌이 함수 부르기 전에 미리 실행 하나 해두는 것
setInterval(getClock, 1000); // (호출하려는 function, 콜 사이 간격 ms) - 5초'마다' function 실행
// setTimeout(sayHello, 5000); // 5초 후에 function 실행
