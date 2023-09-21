// JavaScript文件中的代码

// 在这里添加任何你需要的JavaScript交互和动态内容

// 例如，一个简单的滚动到顶部的按钮
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '返回顶部';
scrollToTopButton.classList.add('scroll-to-top');

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.body.appendChild(scrollToTopButton);
