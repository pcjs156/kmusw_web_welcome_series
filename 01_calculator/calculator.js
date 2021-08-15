// 미지원 버튼 목록
const unsupportedButtons = ['계산 기록', '←', 'C', '( )', '%', '÷', '×', '-', '+', '+/-', '.', '=']

// 입력칸
let inputStatus = document.getElementById('input-status');
// 입력 창이 비어 있음을 기록하는 변수
let isEmpty = true;

// 입력칸 갱신 함수
let updateInputStatus = function (e) {
    console.log(e.target.textContent.trim());
    // function-button에 해당하는 경우
    if (e.target.classList.contains('function-button')) {
        let character = e.target.textContent.trim();

        // 지원하지 않는 기능인 경우
        if (unsupportedButtons.includes(character)) {
            alert('지원하지 않는 기능입니다.');
        } else {
            // TODO: 버튼별 연산 기능 추가
        }
    }
    // 연산자가 아닌 경우 (숫자)
    else {
        let character = e.target.textContent.trim();
        inputStatus.textContent = isEmpty ? character : inputStatus.textContent + character;
        isEmpty = false;
    }
}

// 눌렀을 때 화면에 반영되는 버튼 목록
let normalButtons = document.getElementsByClassName('normal-button');

for (let button of normalButtons) {
    button.addEventListener("click", function (e) {
        updateInputStatus(e);
    });
}