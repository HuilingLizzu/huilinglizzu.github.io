// JavaScript文件中的代码

// 获取导航链接
const navLinks = document.querySelectorAll('nav a');

// 为每个导航链接添加点击事件监听器
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止默认链接行为

        const targetId = link.getAttribute('href').substring(1); // 获取目标部分的ID
        const targetSection = document.getElementById(targetId); // 获取目标部分的元素

        if (targetSection) {
            // 使用滚动行为平滑滚动到目标部分
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});
