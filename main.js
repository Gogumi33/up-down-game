// 난수 만들기.
// 사용자가 번호 입력. -> 이후 Go버튼 누름.
// 만약 맞추면 ok / Up / Down

let computerNum = 0;
let playButton = document.getElementById("play-button"); // getElementById() 통해 html꺼 가져오는것임.
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history=[]; // 유효성 검사를 통과한 숫자들을 저장할 배열.
let historyArea = document.getElementById("history-area");

playButton.addEventListener("click", play); // 플레이 버튼 클릭 시, play() 함수가 실행될 것임.
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value = ""});

function pickRandomNum() {
    computerNum = parseInt(Math.random()*100)+1; // 0~1 사이 난수
    console.log("정답", computerNum);
}
function play() {
    let userValue = userInput.value;

    // 유효성 검사.
    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이의 숫자만 입력 가능합니다!!!";
        return; // 이렇게만 쓰면 함수만 딱 종료시키는 역할.
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다... 다른 숫자를 입력해주세요!";
        return;
    }

    // 유효성 검사 이후.
    chances--;
    chanceArea.textContent = `남은 기회 : ${chances}번`;
    historyArea.textContent = `현재까지 입력된 숫자들 - ${history}`;
    console.log("기회 : ", chances);

    if(userValue < computerNum){
        resultArea.textContent = "Up!";
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!";
    }else{
        resultArea.textContent = "즈엉답!!!";
        gameOver = true;
    }

    history.push(userValue); // 마지막으로 history배열에 패스한 값 저장.
    console.log(history);

    if(chances < 1){
        gameOver = true;
    }
    if(gameOver == true){
        playButton.disabled = true; // 이미 JS에서 제공되고있는 비활성화 속성.
    }
    //console.log(userValue);
}
function reset() {
    // 사용자 입력창이 깨끗하게 정리되고, 새로운 번호가 생성되야 함.
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "결과값이 여기 나옵니다.";

    chances = 5;
    playButton.disabled = false;
    chanceArea.textContent = "남은 기회 : 5번";
    history = [];
    historyArea.textContent = "현재까지 입력된 숫자들 - ";
}

pickRandomNum();