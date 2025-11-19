document.addEventListener('DOMContentLoaded', () => {
    const newsListElement = document.getElementById('news-list');

    // 模擬新聞資料 (包含三個您要求的範例)
    const mockNewsData = [
        {
            id: 1,
            topic: '台灣同婚法案五週年影響分析',
            summary: '自同婚法案通過以來，對社會、法律和家庭結構產生的變化、挑戰與未來展望，深度報導。',
            image: 'images/news-img-marriage.jpg', // 假設圖片路徑
            date: '2025/11/15'
        },
        {
            id: 2,
            topic: 'AI 性別刻板印象：科技如何影響我們的認知',
            summary: '探討人工智慧在訓練數據中繼承和強化性別偏見的問題，以及如何建立更具包容性的 AI 模型。',
            image: 'images/news-img-ai.jpg',
            date: '2025/11/12'
        },
        {
            id: 3,
            topic: '職場生育歧視：新手父母權益保障',
            summary: '解析職場中對懷孕、育兒的隱性與顯性歧視，並提供新手父母在法律上的權益保障與求助途徑。',
            image: 'images/news-img-workplace.jpg',
            date: '2025/11/08'
        },
        {
            id: 4,
            topic: '跨性別者醫療權益：全球趨勢與挑戰',
            summary: '關注跨性別社群在醫療資源、身份文件修改等方面所面臨的困境與國際間的進展。',
            image: 'images/news-img-trans.jpg',
            date: '2025/11/01'
        },
    ];

    // 動態生成新聞卡片
    function renderNewsList() {
        newsListElement.innerHTML = ''; // 清空現有內容
        
        mockNewsData.forEach(news => {
            const newsCard = document.createElement('a');
            newsCard.classList.add('news-card');
            // 點擊後應導向單篇新聞頁面，並傳遞 ID
            newsCard.href = `single-news.html?id=${news.id}`; 
            
            newsCard.innerHTML = `
                <img src="${news.image}" alt="${news.topic}" class="news-image">
                <div class="news-info">
                    <h3>${news.topic}</h3>
                    <p class="summary">${news.summary}</p>
                    <span class="date">${news.date}</span>
                </div>
            `;
            
            newsListElement.appendChild(newsCard);
        });
    }

    renderNewsList();
});
