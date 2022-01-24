const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]; // 이름이 같아야 함.
// rand는 0-1미만이니 이미지 어레이 수만큼 곱하고 내림하는 .floor씀 (length가 5일때 마지막은 4니까)
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

console.log(bgImage);

bgImage.src = `img/${chosenImage}`; // <img src="">랑 같은 것

bgImage.classList.add("bgImage", "brightness");
// document.body.appendChild(bgImage); // HTML에 붙여주기 (prepend는 가장 위에 오게)
document.body.prepend(bgImage);

/* append()가 추가할 수 있는 종류가 더 많아요. append()로는 문자열도 추가가 가능한데, appendChild()로는 객체만 추가할 수 있어요. :)
li.append("추가해주세요") → (가능)
li.appendChild("추가해주세요") → (불가능 - typeError)
그리고 console.log로 두 개를 찍어보면 append()하고 appendChild()가 다르게 나와요!
https://nomadcoders.co/javascript-for-beginners/lectures/2915 */
