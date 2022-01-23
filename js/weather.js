// mdn 사용법 보고 오면 될듯
// getCurrentPosition은 ok한 function과 실패한 function을 param으로 받고 ok param을 만들어주면 사용 가능함

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // API 사용해서 위도 경도 도시로 변환하고 날씨 정보 받아오기
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // &units=metric 는 API문서에서 fahrenheit -> celsius
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.name, data.weather[0].main);
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = `${data.main.temp}℃ in ${data.name}.`;
            weather.innerText = data.weather[0].main;
        });
}

function onGeoError() {
    alert("Sorry. Can't find you. No weather Info for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 이거 하나면 브라우저가 알아서 해결해줌.

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

// https://developer.mozilla.org/ko/docs/Web/API/Geolocation/getCurrentPosition
