document.addEventListener('DOMContentLoaded', () => {
    const switchBtn = document.getElementById('switch-btn');
    const switchText = document.getElementById('switch-text');
    const formTitle = document.getElementById('form-title');
    const authSubmitBtn = document.getElementById('auth-submit-btn');
    const usernameRegister = document.getElementById('username-register');
    const authForm = document.getElementById('auth-form');

    let isRegisterMode = false;

    // 切換登入/註冊模式
    switchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        isRegisterMode = !isRegisterMode;

        if (isRegisterMode) {
            formTitle.textContent = '新使用者註冊';
            authSubmitBtn.textContent = '註冊並登入';
            switchText.textContent = '已經有帳號了？';
            switchBtn.textContent = '切換到登入模式';
            usernameRegister.style.display = 'block'; // 顯示使用者名稱
            authForm.reset(); // 清空表單
        } else {
            formTitle.textContent = '使用者登入';
            authSubmitBtn.textContent = '登入';
            switchText.textContent = '還沒有帳號嗎？';
            switchBtn.textContent = '切換到註冊模式';
            usernameRegister.style.display = 'none'; // 隱藏使用者名稱
            authForm.reset(); // 清空表單
        }
    });

    // 處理表單提交 (此處僅為前端驗證與導航，實際登入需後端處理)
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const passwordInput = document.getElementById('password');
        
        if (passwordInput.value.length < 6) {
            alert('密碼長度必須至少為 6 位數！');
            return;
        }

        if (isRegisterMode) {
            // 註冊邏輯
            alert('註冊成功！準備跳轉至大廳...');
        } else {
            // 登入邏輯
            alert('登入成功！準備跳轉至大廳...');
        }

        // 模擬登入成功，導航至大廳頁面
        window.location.href = 'lobby.html'; 
    });
});
