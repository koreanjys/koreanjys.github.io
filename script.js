// script.js

// 이메일 주소를 클립보드에 복사하는 함수
function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// 이메일 주소 클릭 시 복사하기
const emailLink = document.getElementById('email-link');
emailLink.addEventListener('click', (event) => {
    event.preventDefault();
    const email = emailLink.innerText;
    copyToClipboard(email);
    alert('이메일 주소가 복사되었습니다!');
});
