// JavaScript code in the script file

// Dynamically add major publications
const publicationsList = document.getElementById('publications-list');
const publicationsData = [
    {
        title: "Utility-Aware Dynamic Ridesharing in Spatial Crowdsourcing",
        authors: "Yafei Li, Huiling Li, Xin Huang, Jianliang Xu, Yu Han, Mingliang Xu",
        journal: "IEEE Transactions on Mobile Computing (TMC)",
        year: "2022"
    },
    {
        title: "Fairness-Guaranteed Task Assignment for Crowdsourced Mobility Services",
        authors: "Yafei Li, Huiling Li, Baolong Mei, Xin Huang, Jianliang Xu, Mingliang Xu",
        journal: "IEEE Transactions on Mobile Computing (TMC)",
        year: "2023"
    },
    {
        title: "AMRAS: A Visual Analysis System for Spatial Crowdsourcing",
        authors: "Qingshun Wu, Yafei Li, Huiling Li, Di Zhang, Guanglei Zhu",
        journal: "Proceedings of the VLDB Endowment (PVLDB), Demo Track",
        year: "2022",
        pages: "15(12): 3690-3693"
    },
    {
        title: "PRID: An Efficient Pub/Sub Ride Hitching System",
        authors: "Yafei Li, Lei Gao, Haobo Sun, Huiling Li, Qingshun Wu",
        conference: "Proceedings of the ACM Conference on Information and Knowledge Management (CIKM), Demo Track",
        year: "2022",
        pages: "4921-4925"
    },
    {
        title: "Human-in-the-loop Real-time Task Allocation",
        authors: "Huiling Li, Lei Gao, Hua Wang, Mingliang Xu, Yafei Li",
        conference: "Proceedings of the IEEE Conference on Mobile Data Management (MDM), MUST Workshop",
        year: "2022",
        pages: "518-523"
    }
    // Add more publication data
];

publicationsData.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${item.title}</strong><br>
        Authors: ${item.authors}<br>
        ${item.journal ? `Journal: ${item.journal}<br>` : ''}
        ${item.conference ? `Conference: ${item.conference}<br>` : ''}
        ${item.pages ? `Pages: ${item.pages}<br>` : ''}
        Year: ${item.year}<br>
        }
    `;
    publicationsList.appendChild(listItem);
});
