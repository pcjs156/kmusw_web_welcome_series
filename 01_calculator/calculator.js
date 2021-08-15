// 입력칸
let inputStatus = document.getElementById('input-status');
// 입력 창이 비어 있음을 기록하는 변수
let isEmpty = true;

// 입력칸 갱신 함수
let updateInputStatus = function(c) {
    inputStatus.textContent = isEmpty ? c : inputStatus.textContent + c;
    isEmpty = false;
}

// 눌렀을 때 화면에 반영되는 버튼 목록
let normalButtons = document.getElementsByClassName('normal-button');

for (let button of normalButtons) {
    button.addEventListener("click", function(e) {
        let character = e.target.textContent.trim();
        updateInputStatus(character);
    });
}