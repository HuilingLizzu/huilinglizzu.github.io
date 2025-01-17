// JavaScript code in the script file

// Dynamically add education background
const educationList = document.getElementById('education-list');
const educationData = [
    { date: 'Sep 2021 -- Present', degree: 'Master of Engineering', school: 'Zhengzhou University', location: 'Zhengzhou, China', major: 'Computer Science and Technology' },
    { date: 'Sep 2017 -- Jul 2021', degree: 'Bachelor of Engineering', school: 'Zhengzhou University', location: 'Zhengzhou, China', major: 'Software Engineering' },
    // Add more education background data
];

educationData.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${item.date}</strong> - ${item.degree}<br>
        ${item.school}, ${item.location}<br>
        Major: ${item.major}
    `;
    educationList.appendChild(listItem);
});

// Dynamically add major publications (excluding "Minor Revision" status)
const publicationsList = document.getElementById('publications-list');
const publicationsData = [
    {
        title: "Utility-Aware Dynamic Ridesharing in Spatial Crowdsourcing",
        authors: "Yafei Li, <strong>Huiling Li</strong>, Xin Huang, Jianliang Xu, Yu Han, Mingliang Xu",
        journal: "IEEE Transactions on Mobile Computing (TMC)",
        year: "2022"
    },
    {
        title: "Fairness-Guaranteed Task Assignment for Crowdsourced Mobility Services",
        authors: "Yafei Li, <strong>Huiling Li</strong>, Baolong Mei, Xin Huang, Jianliang Xu, Mingliang Xu",
        journal: "IEEE Transactions on Mobile Computing (TMC)",
        year: "2023"
    },
    {
        title: "AMRAS: A Visual Analysis System for Spatial Crowdsourcing",
        authors: "Qingshun Wu, Yafei Li, <strong>Huiling Li</strong>, Di Zhang, Guanglei Zhu",
        journal: "Proceedings of the VLDB Endowment (PVLDB), Demo Track",
        year: "2022",
        pages: "15(12): 3690-3693"
    },
    {
        title: "PRID: An Efficient Pub/Sub Ride Hitching System",
        authors: "Yafei Li, Lei Gao, Haobo Sun, <strong>Huiling Li</strong>, Qingshun Wu",
        conference: "Proceedings of the ACM Conference on Information and Knowledge Management (CIKM), Demo Track",
        year: "2022",
        pages: "4921-4925"
    }
    // Add more publication data
];

publicationsData.forEach(item => {
    if (item.status !== "Minor Revision") { // Exclude publications with "Minor Revision" status
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${item.title}</strong><br>
            ${item.authors}<br>
            ${item.journal ? `${item.journal}<br>` : ''}
            ${item.conference ? `${item.conference}<br>` : ''}
            ${item.year}<br>
        `;
        publicationsList.appendChild(listItem);
    }
});

const pdfLink = document.createElement('li');
pdfLink.innerHTML = `
    <strong>Effective Task Assignment in Mobility Prediction-Aware Spatial Crowdsourcing</strong><br>
    <strong>Huiling Li</strong>, Yafei Li, Wei Chen, Shuo He, Mingliang Xu, Jianliang Xu<br>
    Proceedings of the IEEE International Conference on Data Engineering (ICDE)<br>
    2025<br>
    <a href="paper/TAMP_technical_report.pdf" target="_blank">ICDE25.pdf</a>
`;
publicationsList.appendChild(pdfLink);
