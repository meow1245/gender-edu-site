document.addEventListener('DOMContentLoaded', () => {
    const profileSummary = document.getElementById('profile-summary');
    const profileDetail = document.getElementById('profile-detail');
    const showProfileDetailBtn = document.getElementById('show-profile-detail');
    const arModeCard = document.getElementById('ar-mode');
    const aiChatCard = document.getElementById('ai-chat');
    const logoutBtn = document.getElementById('logout-btn');

    // 1. 切換個人資訊顯示
    let isDetailVisible = false;

    showProfileDetailBtn.addEventListener('click', () => {
        isDetailVisible = !isDetailVisible;
        
        if (isDetailVisible) {
            profileDetail.style.display = 'block';
            showProfileDetailBtn.textContent = '收起個人中心';
        } else {
            profileDetail.style.display = 'none';
            showProfileDetailBtn.textContent = '查看個人中心';
        }
    });

    // 初始化：隱藏詳細資訊
    profileDetail.style.display = 'none';

    // 2. 登出功能
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('確定要登出嗎？')) {
            // 實際登出邏輯 (清除 Session/Token)
            alert('您已登出。');
            window.location.href = 'index.html'; // 導航回首頁
        }
    });

    // 3. 開發中功能提示
    const handleDevelopingFeature = (e) => {
        alert('此功能仍在開發中...敬請期待！');
        e.preventDefault();
    };

    arModeCard.addEventListener('click', handleDevelopingFeature);
    aiChatCard.addEventListener('click', handleDevelopingFeature);

    // 也為下拉選單中的連結添加提示
    document.querySelectorAll('.disabled-link').forEach(link => {
        link.addEventListener('click', handleDevelopingFeature);
    });
});
