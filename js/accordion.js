/* ========================================
   新思想考前速记 - 手风琴折叠
   ======================================== */

// 折叠状态记忆
const STORAGE_KEY = 'newthought-card-states';

// 保存折叠状态
function saveCardStates() {
    const states = {};
    document.querySelectorAll('.card').forEach(card => {
        states[card.id] = card.classList.contains('active');
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
}

// 加载折叠状态
function loadCardStates() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const states = JSON.parse(saved);
        document.querySelectorAll('.card').forEach(card => {
            if (states[card.id] !== undefined) {
                if (states[card.id]) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            }
        });
        return true;
    }
    return false;
}

// 初始化手风琴
function initAccordion() {
    document.querySelectorAll('.card-header').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.parentElement;
            card.classList.toggle('active');
            saveCardStates();
        });
    });
}

// 折叠/展开所有
function initCollapseAll() {
    const collapseBtn = document.getElementById('collapseAll');
    if (!collapseBtn) return;

    let allCollapsed = false;

    collapseBtn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.card');
        allCollapsed = !allCollapsed;
        cards.forEach(card => {
            if (allCollapsed) {
                card.classList.remove('active');
            } else {
                card.classList.add('active');
            }
        });
        collapseBtn.textContent = allCollapsed ? '📂' : '📁';
        saveCardStates();
    });
}
