// JavaScript文件中的代码

// 动态添加教育背景
const educationList = document.getElementById('education-list');
const educationData = [
    { degree: '博士', school: '大学1', year: '20XX' },
    { degree: '硕士', school: '大学2', year: '20XX' },
    // 添加更多教育背景数据
];

educationData.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.degree} - ${item.school}, ${item.year}`;
    educationList.appendChild(listItem);
});

// 动态添加出版物
const publicationsList = document.getElementById('publications-list');
const publicationsData = [
    { title: '论文1', authors: '作者1', publicationDate: '2023-01-15' },
    { title: '论文2', authors: '作者2', publicationDate: '2022-11-20' },
    // 添加更多出版物数据
];

publicationsData.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${item.title}</strong> - ${item.authors}, ${item.publicationDate}`;
    publicationsList.appendChild(listItem);
});
