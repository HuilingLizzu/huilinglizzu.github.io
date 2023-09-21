// JavaScript code in the script file

// Dynamically add education background
const educationList = document.getElementById('education-list');
const educationData = [
    { date: 'Sep 2021 -- Present', degree: 'Master of Engineering', school: 'Zhengzhou University', location: 'Zhengzhou, China', major: 'Computer Science and Technology', gpa: '3.91/4.3' },
    { date: 'Sep 2017 -- Jul 2021', degree: 'Bachelor of Engineering', school: 'Zhengzhou University', location: 'Zhengzhou, China', major: 'Software Engineering (Outstanding Engineer Program, Ministry of Education)', gpa: '3.61/4.0' },
    // Add more education background data
];

educationData.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${item.date}</strong> - ${item.degree}<br>
        ${item.school}, ${item.location}<br>
        Major: ${item.major}<br>
        Cumulative GPA: <strong>${item.gpa}</strong>
    `;
    educationList.appendChild(listItem);
});

// Dynamically add major publications
const publicationsList = document.getElementById('publications-list');
const publicationsData = [
    {
        title: "Utility-Aware Dynamic Ridesharing in Spatial Crowdsourcing",
        authors: "Yafei Li, Huiling Li, Xin Huang, Jianliang Xu, Yu Han, Mingliang Xu",
        journal: "IEEE Transactions on Mobile Computing (TMC)",
        year: "2022",
        doi: "10.1109/TMC.2022.3232215"
    },
    {
        title: "Fairness-Guaranteed Task Assignment for Crowdsourced Mobility Services",
        authors: "Yafei Li, Huiling Li, Baolong Mei, Xin Huang, Jianliang Xu, Mingliang Xu",
        journal: "IEEE Transactions on Mobile Computing (TMC)",
        year: "2023",
        doi: "10.1109/TMC.2023.3310591"
    },
    // Add more publication data
];

publicationsData.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${item.title}</strong><br>
        Authors: ${item.authors}<br>
        Journal: ${item.journal}<br>
        Year: ${item.year}<br>
        DOI: <a href="${item.doi}" target="_blank">${item.doi}</a>
    `;
    publicationsList.appendChild(listItem);
});
