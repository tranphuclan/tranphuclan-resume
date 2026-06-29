// Bản tiếng Việt là nội dung mặc định trong HTML.
// Đối tượng dưới đây chứa bản dịch tiếng Anh.
const translations = {
  en: {
    role: "BACK END DEVELOPER",
    contact_title: "CONTACT",
    address: "Hoang Mai, Ha Noi",
    skills_title: "SKILLS",
    skill_cat_languages: "Languages",
    skill_languages: "Node.js (TypeScript), Python",
    skill_cat_databases: "Databases",
    skill_databases: "MongoDB, Redis",
    skill_cat_api: "API",
    skill_api: "RESTful, GraphQL, Apollo Server",
    skill_cat_infra: "Infrastructure",
    skill_infra: "Docker, Linux",
    skill_cat_ai: "AI/ML",
    skill_ai: "RAG pipeline, LLM integration",
    skill_cat_blockchain: "Blockchain",
    skill_blockchain: "TRON, TON ecosystem",
    skill_cat_tools: "Tools",
    skill_tools: "Git",
    advantage_title: "ADVANTAGE",
    adv_1: "5 years of backend experience in the blockchain ecosystem.",
    adv_2: "RAG/LLM integration experience for product support chatbots.",
    adv_3: "Redis caching optimization — 50% overall system speed improvement.",
    adv_4: "DeFi product development on TRON and TON ecosystems.",
    education_title: "EDUCATION",
    edu_major: "Information Technology",
    edu_school: "Ha Noi University of Business and Technology (HUBT)",
    experience_title: "WORK EXPERIENCE",
    exp_role: "BACKEND DEVELOPER",
    exp_1:
      "Built RESTful and GraphQL APIs using Node.js, Apollo Server, and MongoDB — serving 10K+ daily requests with sub-200ms response times.",
    exp_2:
      "Designed and deployed a RAG chatbot with LLM integration (Python, vector DB) — automatically resolving 70%+ of product support queries.",
    exp_3:
      "Developed and launched multiple Telegram bot systems (Node.js, TON/TRON APIs) — driving user engagement for 5+ blockchain products.",
    exp_4:
      "Implemented a Redis caching layer for MongoDB queries — reducing server load by 40% and improving overall system speed by 50%.",
    exp_5:
      "Designed MongoDB schemas and indexing strategies for DeFi products on TRON and TON ecosystems.",
    projects_title: "PROJECTS",
    prj_1_name: "Tronsave: Optimizing TRON Transaction Fees",
    prj_1_role: "Role: Lead Backend Developer",
    prj_1_stack: "Node.js, TypeScript, TRON API, MongoDB, Redis",
    prj_1_1:
      "Processed thousands of Energy & Bandwidth purchase transactions daily, reducing TRON transaction fees for users by up to 30%.",
    prj_1_2:
      "Designed an on-chain fee optimization pipeline with Redis caching to reduce TRON network resource lookup latency.",
    prj_1_3:
      "Built backend APIs ensuring seamless transactions and a secure passive income mechanism for users.",
    prj_2_name: "TobBot: Fast DeFi Trading on Telegram for TON",
    prj_2_role: "Role: Solo Developer",
    prj_2_stack: "Node.js, TypeScript, TON API, Telegram Bot API, GraphQL",
    prj_2_1:
      "Built a Telegram bot enabling DeFi trading on TON with sub-second execution times.",
    prj_2_2:
      "Integrated GraphQL API and TON blockchain SDK — eliminating complex steps and reducing operations by 80% vs. traditional web interfaces.",
    prj_2_3:
      "Handled high-frequency trades via Telegram with queue and retry mechanisms, ensuring reliability in volatile DeFi environments.",
  },
};

const langToggle = document.getElementById("lang-toggle");
const langLabel = document.getElementById("lang-label");
const langFlag = langToggle.querySelector(".flag");

// Lưu lại nội dung tiếng Việt gốc để có thể chuyển ngược lại.
const viDefaults = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  viDefaults[el.getAttribute("data-i18n")] = el.innerHTML;
});

function applyLanguage(lang) {
  const isEn = lang === "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = isEn ? translations.en[key] ?? viDefaults[key] : viDefaults[key];
  });

  document.documentElement.lang = isEn ? "en" : "vi";
  langLabel.textContent = isEn ? "English" : "Tiếng Việt";
  langFlag.textContent = isEn ? "🇬🇧" : "🇻🇳";
  langToggle.setAttribute("aria-pressed", String(isEn));
  localStorage.setItem("resume-lang", lang);
}

langToggle.addEventListener("click", () => {
  const current = localStorage.getItem("resume-lang") === "en" ? "en" : "vi";
  applyLanguage(current === "en" ? "vi" : "en");
});

applyLanguage(localStorage.getItem("resume-lang") === "en" ? "en" : "vi");
