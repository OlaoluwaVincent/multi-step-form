const gender = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
];
const marital_status = [
    { name: "Single", value: "single" },
    { name: "Married", value: "married" },
    { name: "Divorced", value: "divorced" },
];

const professions = [
    "Cloud Engineer",
    "Web Developer",
    "Network Engineer",
    "Data Analyst",
];

const cloudEngineer = {
    skills: [
        { name: "Amazon Web Services (AWS)" },
        { name: "Microsoft Azure" },
        { name: "Google Cloud Platform (GCP)" },
    ],
    education: [
        { name: "AWS Certified Solutions Architect" },
        { name: "Microsoft Certified: Azure Solutions Architect Expert" },
        { name: "Google Cloud Certified - Professional Cloud Architect" },
    ],
};

const webDeveloper = {
    skills: [
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "TypeScript" },
    ],
    education: [{ name: "React.js" }, { name: "Angular" }, { name: "Vue.js" }],
};

const networkEngineer = {
    skills: [{ name: "Cisco" }, { name: "Juniper" }, { name: "Huawei" }],
    education: [
        { name: "Cisco Certified Network Associate (CCNA)" },
        { name: "Cisco Certified Network Professional (CCNP)" },
        { name: "Juniper Networks Certified Internet Associate (JNCIA)" },
    ],
};

const dataAnalyst = {
    skills: [
        { name: "SQL" },
        { name: "Python" },
        { name: "R" },
        { name: "Tableau" },
    ],
    education: [
        { name: "Microsoft Certified: Azure Data Scientist Associate" },
        { name: "Google Cloud Professional Data Engineer" },
        { name: "AWS Certified Big Data - Specialty" },
    ],
};

export {
    gender,
    marital_status,
    professions,
    cloudEngineer,
    webDeveloper,
    networkEngineer,
    dataAnalyst,
};
