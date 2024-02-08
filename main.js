// 난수 만들기.
// 사용자가 번호 입력. -> 이후 Go버튼 누름.
// 만약 맞추면 ok / Up / Down

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum() {
    computerNum = parseInt(Math.random()*100)+1; // 0~1 사이 난수
    console.log("정답", computerNum);
}
function play() {
    let userValue = userInput.value;
    if(userValue < computerNum){
        resultArea.textContent = "Up!";
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!";
    }else{
        resultArea.textContent = "즈엉답!!!";
    }

    console.log(userValue);
}
pickRandomNum();