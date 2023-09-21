// JavaScript文件中的代码
// 选择简介部分的DOM元素
const profile = document.querySelector('.profile');
const education = document.querySelector('.education');

// 隐藏教育背景部分
education.style.display = 'none';

// 添加“显示/隐藏教育背景”按钮
const toggleButton = document.createElement('button');
toggleButton.textContent = '显示教育背景';
toggleButton.classList.add('toggle-button');

// 监听按钮点击事件
toggleButton.addEventListener('click', () => {
    if (education.style.display === 'none') {
        education.style.display = 'block';
        toggleButton.textContent = '隐藏教育背景';
    } else {
        education.style.display = 'none';
        toggleButton.textContent = '显示教育背景';
    }
});

// 将按钮添加到简介部分
profile.appendChild(toggleButton);
