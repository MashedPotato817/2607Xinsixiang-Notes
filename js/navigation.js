/* ========================================
   新思想考前速记 - 导航交互
   ======================================== */

// 汉堡菜单
function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const fullscreenNav = document.getElementById('fullscreenNav');

    if (!menuToggle || !fullscreenNav) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        fullscreenNav.classList.toggle('active');
    });

    // 点击链接关闭菜单
    fullscreenNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

function closeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const fullscreenNav = document.getElementById('fullscreenNav');

    if (menuToggle) menuToggle.classList.remove('active');
    if (fullscreenNav) fullscreenNav.classList.remove('active');
}

// 返回顶部
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 更新最后修改时间
function updateLastModified() {
    const lastModifiedEl = document.getElementById('lastModified');
    if (lastModifiedEl) {
        lastModifiedEl.textContent = new Date(document.lastModified).toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}
