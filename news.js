document.addEventListener('DOMContentLoaded', () => {
    const newsListElement = document.getElementById('news-list');
    const modal = document.getElementById('news-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalImage = document.getElementById('modal-image');
    const modalFullContent = document.getElementById('modal-full-content');
    const commentForm = document.getElementById('comment-form');
    const commentsListElement = document.getElementById('comments-list');

    // 模擬新聞資料 (新增了 fullContent 欄位來顯示在彈出框中)
    const mockNewsData = [
        {
            id: 1,
            topic: '台灣同婚法案五週年影響分析',
            summary: '自同婚法案通過以來，對社會、法律和家庭結構產生的變化、挑戰與未來展望，深度報導。',
            image: 'images/news-img-marriage.jpg', // 假設圖片路徑
            date: '2025/11/15',
            fullContent: '<p>深入分析同婚法案通過後，社會輿論、法律執行層面以及新興家庭模式的發展狀況。尤其關注跨國同婚、繼親收養等複雜議題的最新判例與法規調整。整體而言，社會接受度緩慢提高，但仍需更多性別平等教育來強化尊重。</p><p>--- 報導來源：某性別研究中心</p>',
            comments: [
                { user: '小光', text: '希望能看到更多關於收養權益的討論！', time: '5分鐘前' },
                { user: 'Sam', text: '這項法案對社會的進步是巨大的。', time: '10分鐘前' }
            ]
        },
        {
            id: 2,
            topic: 'AI 性別刻板印象：科技如何影響我們的認知',
            summary: '探討人工智慧在訓練數據中繼承和強化性別偏見的問題，以及如何建立更具包容性的 AI 模型。',
            image: 'images/news-img-ai.jpg',
            date: '2025/11/12',
            fullContent: '<p>研究顯示，目前的 AI 語言模型和圖像生成器傾向於將女性與護理、家務聯繫，男性與工程、領導聯繫。這反映了訓練數據中的歷史偏差。解決方案包括數據去偏見化和人工校正，以確保 AI 促進性別平等而非固化刻板印象。</p>',
            comments: []
        },
        {
            id: 3,
            topic: '職場生育歧視：新手父母權益保障',
            summary: '解析職場中對懷孕、育兒的隱性與顯性歧視，並提供新手父母在法律上的權益保障與求助途徑。',
            image: 'images/news-img-workplace.jpg',
            date: '2025/11/08',
            fullContent: '<p>許多新手父母在申請育嬰假或回歸職場時面臨職位調動、升遷受阻等隱性歧視。我們整理了勞基法和性別工作平等法中對父母權益的保障條款，鼓勵員工勇敢舉報，並呼籲企業建立更友善的育兒環境。</p>',
            comments: [
                { user: 'Lily', text: '我剛生完孩子，深有感觸！公司文化真的非常重要。', time: '1小時前' }
            ]
        },
    ];

    // 動態生成新聞卡片並綁定點擊事件
    function renderNewsList() {
        newsListElement.innerHTML = '';
        mockNewsData.forEach(news => {
            const newsCard = document.createElement('div'); // 使用 div 而非 a
            newsCard.classList.add('news-card');
            newsCard.setAttribute('data-id', news.id); // 使用 data 屬性存儲 ID
            
            newsCard.innerHTML = `
                <img src="${news.image}" alt="${news.topic}" class="news-image">
                <div class="news-info">
                    <h3>${news.topic}</h3>
                    <p class="summary">${news.summary}</p>
                    <span class="date">${news.date}</span>
                </div>
            `;
            
            newsCard.addEventListener('click', () => openModal(news.id)); // 綁定點擊開啟彈出框
            newsListElement.appendChild(newsCard);
        });
    }

    // 開啟彈出框並載入內容
    function openModal(id) {
        const newsItem = mockNewsData.find(n => n.id === id);
        if (!newsItem) return;

        // 載入新聞內容
        modalTitle.textContent = newsItem.topic;
        modalDate.textContent = newsItem.date;
        modalImage.src = newsItem.image;
        modalFullContent.innerHTML = newsItem.fullContent;
        
        // 載入並渲染留言
        renderComments(newsItem);

        // 顯示彈出框
        modal.style.display = 'block';
        modal.setAttribute('data-current-id', id); // 記錄當前顯示的新聞 ID
    }

    // 關閉彈出框
    function closeModal() {
        modal.style.display = 'none';
    }

    // 渲染留言列表
    function renderComments(newsItem) {
        commentsListElement.innerHTML = ''; // 清空舊留言
        if (newsItem.comments && newsItem.comments.length > 0) {
            newsItem.comments.forEach(comment => {
                const item = document.createElement('div');
                item.classList.add('comment-item');
                item.innerHTML = `<span class="comment-meta">${comment.user}:</span> ${comment.text} <span style="float:right; color:#aaa; font-size:0.8em;">(${comment.time})</span>`;
                commentsListElement.appendChild(item);
            });
        } else {
            commentsListElement.innerHTML = '<p style="color:#888;">目前還沒有人留言，快來搶頭香！</p>';
        }
    }

    // 處理留言提交 (僅前端模擬)
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentInput = document.getElementById('comment-input');
        const newCommentText = commentInput.value.trim();
        const currentId = parseInt(modal.getAttribute('data-current-id'));
        
        if (newCommentText) {
            const newsItem = mockNewsData.find(n => n.id === currentId);
            
            if (newsItem) {
                const newComment = {
                    user: '使用者A', // 假設已登入
                    text: newCommentText,
                    time: new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' })
                };
                
                newsItem.comments.push(newComment); // 添加到模擬數據
                renderComments(newsItem); // 重新渲染留言列表
                commentInput.value = ''; // 清空輸入框
            }
        }
    });

    // 關閉按鈕事件
    closeBtn.addEventListener('click', closeModal);

    // 點擊彈出框外部關閉
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // 初始化
    renderNewsList();
});
