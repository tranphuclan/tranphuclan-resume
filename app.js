// Bản tiếng Việt là nội dung mặc định trong HTML.
// Đối tượng dưới đây chứa bản dịch tiếng Anh.
const translations = {
  en: {
    role: "BACKEND DEVELOPER",

    contact_title: "CONTACT",
    address: "Ha Noi",

    skills_title: "TECHNICAL SKILLS",
    skill_cat_languages: "Languages",
    skill_languages: "TypeScript, Python",
    skill_cat_frameworks: "Runtime / Frameworks",
    skill_frameworks: "Node.js, Express.js, Fastify, GraphQL (Apollo)",
    skill_cat_apis: "APIs",
    skill_apis: "REST, gRPC, WebSocket",
    skill_cat_databases: "Databases",
    skill_databases: "SQL (PostgreSQL, MariaDB); NoSQL (MongoDB)",
    skill_cat_messaging: "Messaging",
    skill_messaging: "Kafka, RabbitMQ",
    skill_cat_patterns: "Reliability",
    skill_patterns:
      "Compensating rollback, race-condition handling, async recheck, queue-based processing, caching, DB indexing",
    skill_cat_auth: "Auth / Integration",
    skill_auth:
      "JWT authentication, Telegram Bot API, blockchain SDK integration (TRON / TON)",
    skill_cat_ai_ml: "AI Integration",
    skill_ai_ml:
      "RAG pipelines, embeddings (Ollama), multi-LLM provider abstraction, prompt tuning",
    skill_cat_infra: "Infrastructure / Observability",
    skill_infra: "Docker, Linux, Grafana, Git",
    skill_cat_testing: "Testing",
    skill_testing: "Jest (unit & integration), API testing (Postman)",
    skill_cat_human_languages: "English",
    skill_human_languages: "Intermediate (reading/writing technical docs)",

    summary_title: "PROFESSIONAL SUMMARY",
    summary_text:
      "Backend Developer with 4+ years building production Node.js/TypeScript services — GraphQL/REST APIs, MongoDB/PostgreSQL data models, Redis caching, and message-queue-backed async flows. Strongest experience in blockchain-related products: owning order lifecycle APIs, on-chain SDK integration, failure handling for unreliable async confirmations (recheck + compensating rollback), and query/latency tuning under real-world load.",

    experience_title: "WORK EXPERIENCE",
    exp1_role: "Backend Developer — Silotech",
    exp1_time: "2023 – Present",
    exp1_1:
      'Core backend developer on a live <strong>TRON</strong> fee-optimization service that reduced on-chain transaction fees by <strong>~66%</strong>, supporting <strong>~$11M</strong> in assets, <strong>~1,000</strong> active users, and <strong>~2,000–3,000</strong> orders/day.',
    exp1_2:
      "Designed REST APIs and database schemas (<strong>MongoDB, PostgreSQL</strong>) for shared modules across multiple products — user management, authentication, notifications, order history, and Telegram bot administration.",
    exp1_3:
      "Developed <strong>GraphQL</strong> and <strong>REST</strong> APIs for the full order lifecycle (create, query, update, cancel, refund) plus resource purchase/allocation, reclaiming, health checks, historical archiving, and automated transfers to secure offline wallets.",
    exp1_4:
      "Modeled <strong>MongoDB</strong> schemas for orders, resource balances, and transaction history; added indexes and short-TTL <strong>Redis</strong> caching for hot reads; used resolver-level batching to reduce N+1 GraphQL queries.",
    exp1_5:
      "Engineered order confirmation as an immediate write + <strong>RabbitMQ</strong>-driven recheck that re-verifies each processed transaction against on-chain TRON state, with automatic <strong>compensating rollback</strong> on mismatch — guarding against unreliable async blockchain confirmations.",
    exp1_6:
      "Fixed <strong>race conditions</strong> in concurrent order operations to prevent duplicate or inconsistent processing.",
    exp1_7:
      "Migrated selected internal service calls from REST to <strong>gRPC</strong>; kept <strong>p95</strong> order-query latency at <strong>~50ms</strong> in production, measured with <strong>Grafana</strong> dashboards.",
    exp1_8:
      "Implemented <strong>Kafka</strong> consumers to sync incoming TRON transfer transactions and credit user balances in the DB only after on-chain events arrived — keeping blockchain work non-blocking for API requests.",
    exp1_9:
      "Built a <strong>RAG support chatbot</strong> (docs/FAQ ingestion, embeddings via Ollama, multi-LLM provider layer) for product and fee/technical questions; shipped to production and refined prompts/knowledge base from real support usage.",
    exp1_10:
      "Wrote unit/integration tests for critical API behavior; deployed and operated services on Linux with Docker.",

    exp2_role: "Backend Developer — The Parallel",
    exp2_time: "2021 – 2023",
    exp2_fresher_title: "Fresher — 2022 – 2023",
    exp2_fresher_1:
      "Delivered <strong>REST</strong> and <strong>GraphQL</strong> APIs for internal data-query tools used by other teams.",
    exp2_fresher_2:
      "Built an API <strong>monitoring &amp; alerting</strong> service measuring latency (DNS/TCP/TTFB), uptime, and throughput; sent real-time alerts via webhooks/messaging to speed up incident response.",
    exp2_fresher_3:
      "Debugged and optimized existing endpoints and database queries; collaborated with frontend on API schema design.",
    exp2_intern_title: "Intern — 2021 – 2022",
    exp2_intern_1:
      "Implemented backend features with Node.js (Express/Fastify), GraphQL (Apollo), JWT auth, Redis caching, and WebSocket.",
    exp2_intern_2:
      "Worked with MongoDB and MariaDB for data modeling/queries; followed team Git workflows (branching, PRs, code review) on internal reporting and backend tasks.",

    projects_title: "PROJECTS",

    prj1_name: "Blockchain Transaction Fee Optimization Service (TRON)",
    prj1_meta: "Silotech · under NDA · production",
    prj1_1:
      "Fee-optimization platform for TRON: users buy and consume network fee resources (Energy/Bandwidth) without manual on-chain operations; my scope covered order lifecycle APIs, on-chain resource management, concurrency/failure handling, and query-latency tuning (detailed under Work Experience).",
    prj1_tech:
      "<strong>Tech:</strong> Node.js, Express, GraphQL, gRPC, TronWeb, MongoDB, Redis",

    prj2_name: "DeFi Trading Bot (Telegram · TON)",
    prj2_meta: "Silotech · under NDA",
    prj2_1:
      "Backend for a Telegram bot that runs <strong>TON</strong> DeFi trades in-chat: command flows, order validation, wallet connection, and transaction status feedback via <strong>TON SDK</strong>.",
    prj2_2:
      "Orchestrated multi-step on-chain swap flows into simpler one-action bot commands across multiple TON DeFi products.",
    prj2_tech: "<strong>Tech:</strong> Node.js, Telegram Bot API, TON SDK",

    prj3_name: "AI Support Chatbot (TRON product support)",
    prj3_meta: "Silotech · under NDA · production",
    prj3_1:
      "RAG chatbot over internal docs/FAQs for product usage and TRON fee concepts (Energy &amp; Bandwidth).",
    prj3_2:
      "Embedding/ingestion with <strong>Ollama</strong>; multi-LLM integration layer so providers can be swapped without rewriting core flow; actively maintained with ongoing prompt/data updates.",
    prj3_tech: "<strong>Tech:</strong> Node.js, Ollama, REST, RAG",

    prj4_name: "API Monitoring & Alerting System",
    prj4_meta: "The Parallel · under NDA",
    prj4_1:
      "Monitoring service tracking API availability and performance — response-time breakdown (DNS, TCP, first-byte), uptime, and throughput — with real-time alerts via webhooks/messaging and root-cause hints to reduce MTTR.",
    prj4_2:
      "Added traffic-volume monitoring and spike detection to warn before system overload.",
    prj4_tech:
      "<strong>Tech:</strong> Node.js, Express, Redis, webhooks, messaging integrations",

    prj5_name: "Game Dialogue Translation Tool",
    prj5_meta: "Personal Project",
    prj5_1:
      "Desktop tool: capture in-game audio → <strong>Whisper</strong> STT → Vietnamese translation (<strong>Google Translate API</strong>); ~1–2s processing latency in current version.",
    prj5_tech: "<strong>Tech:</strong> Python, Whisper, Google Translate API",
    prj5_repo:
      '<strong>Repo:</strong> <a href="https://github.com/tranphuclan/game-audio-translator" target="_blank" rel="noopener">github.com/tranphuclan/game-audio-translator</a>',

    education_title: "EDUCATION",
    edu_major: "B.Sc. in Information Technology",
    edu_time: "2018 – 2022",
    edu_school: "Hanoi University of Business and Technology (HUBT)",
    edu_1:
      "Core coursework: object-oriented programming, algorithms, and data structures.",
  },
};

const langToggle = document.getElementById("lang-toggle");
const langFlag = langToggle.querySelector(".flag");
const styleToggle = document.getElementById("style-toggle");
const pdfDownload = document.getElementById("pdf-download");
const dock = document.getElementById("dock");
const dockHandle = document.getElementById("dock-handle");
const dockPanel = dock.querySelector(".dock-panel");
const resumeEl = document.querySelector(".resume");

// Lưu lại nội dung tiếng Việt gốc để có thể chuyển ngược lại.
const viDefaults = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  viDefaults[el.getAttribute("data-i18n")] = el.innerHTML;
});

function getLangFromUrl() {
  const lang = new URLSearchParams(window.location.search).get("lang");
  return lang === "en" || lang === "vi" ? lang : null;
}

function syncLangToUrl(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState(null, "", url);
}

function getInitialLanguage() {
  return getLangFromUrl() ?? (localStorage.getItem("resume-lang") === "en" ? "en" : "vi");
}

function applyLanguage(lang) {
  const isEn = lang === "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = isEn ? translations.en[key] ?? viDefaults[key] : viDefaults[key];
  });

  document.documentElement.lang = isEn ? "en" : "vi";
  langFlag.textContent = isEn ? "🇬🇧" : "🇻🇳";
  langToggle.setAttribute("aria-pressed", String(isEn));
  const langTitle = isEn ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh";
  langToggle.setAttribute("aria-label", langTitle);
  langToggle.setAttribute("title", langTitle);

  const pdfTitle = isEn ? "Download CV (PDF)" : "Tải CV (PDF)";
  pdfDownload.setAttribute("aria-label", pdfTitle);
  pdfDownload.setAttribute("title", pdfTitle);
  localStorage.setItem("resume-lang", lang);
  syncLangToUrl(lang);
  updateStyleToggleUi();
}

// ---------- Chuyển đổi kiểu CV: modern (mặc định) ↔ harvard ----------

// @page không thể điều kiện theo class trên <body>, nên lề trang in của
// bản Harvard được chèn động qua thẻ <style> riêng khi bật kiểu này.
const harvardPrintStyle = document.createElement("style");
harvardPrintStyle.textContent = "@media print { @page { margin: 12mm 14mm; } }";

// Bản Harvard cần mục Kỹ năng nằm cuối. Di chuyển DOM thật thay vì dùng
// flex `order` vì Chrome phân trang sai với `order` khi in.
const skillsSection = document.querySelector(".side-section--skills");
const sidebarEl = document.querySelector(".sidebar");
const contentEl = document.querySelector(".content");

function isHarvardActive() {
  return document.body.classList.contains("harvard");
}

function getStyleFromUrl() {
  const style = new URLSearchParams(window.location.search).get("style");
  return style === "harvard" || style === "modern" ? style : null;
}

function syncStyleToUrl(style) {
  const url = new URL(window.location.href);
  url.searchParams.set("style", style);
  window.history.replaceState(null, "", url);
}

function getInitialStyle() {
  return (
    getStyleFromUrl() ??
    (localStorage.getItem("resume-style") === "harvard" ? "harvard" : "modern")
  );
}

function updateStyleToggleUi() {
  const isEn = document.documentElement.lang === "en";
  const isHarvard = isHarvardActive();
  const title = isHarvard
    ? isEn
      ? "Switch to modern style"
      : "Chuyển về kiểu hiện đại"
    : isEn
      ? "Switch to Harvard style"
      : "Chuyển sang kiểu Harvard";
  styleToggle.setAttribute("aria-pressed", String(isHarvard));
  styleToggle.setAttribute("aria-label", title);
  styleToggle.setAttribute("title", title);
}

function applyStyle(style) {
  const isHarvard = style === "harvard";
  document.body.classList.toggle("harvard", isHarvard);
  if (isHarvard) {
    document.head.appendChild(harvardPrintStyle);
    contentEl.appendChild(skillsSection);
  } else {
    harvardPrintStyle.remove();
    sidebarEl.appendChild(skillsSection); // vị trí gốc: cuối sidebar
  }
  updateStyleToggleUi();
  localStorage.setItem("resume-style", style);
  syncStyleToUrl(style);
}

styleToggle.addEventListener("click", () => {
  applyStyle(isHarvardActive() ? "modern" : "harvard");
});

// Dock nép vào mép phải.
// - Khi còn khoảng trống bên cạnh (không đè lên CV): luôn mở, ghim cố định.
// - Khi dock đè lên nội dung CV: thu vào thành tay cầm, bấm mới hiện.
function setDockOpen(open) {
  dock.classList.toggle("open", open);
  dockHandle.setAttribute("aria-expanded", String(open));
  dockHandle.setAttribute("aria-label", open ? "Thu gọn công cụ" : "Mở công cụ");
}

// Bảng nút (khi mở) có đè lên khối .resume không?
function dockOverlapsResume() {
  if (!resumeEl) return false;
  const r = resumeEl.getBoundingClientRect();
  const h = dockHandle.getBoundingClientRect();
  const gap = 6; // khoảng cách panel ↔ tay cầm (~0.4rem)
  const panelW = dockPanel.offsetWidth;
  const panelH = dockPanel.offsetHeight;
  const pRight = h.left - gap;
  const pLeft = pRight - panelW;
  const cy = h.top + h.height / 2;
  const pTop = cy - panelH / 2;
  const pBottom = cy + panelH / 2;
  return pLeft < r.right && pRight > r.left && pTop < r.bottom && pBottom > r.top;
}

let dockPinnedOpen = false;
let prevOverlap = null;

function updateDockState() {
  const overlap = dockOverlapsResume();
  if (overlap === prevOverlap) return;
  prevOverlap = overlap;
  dockPinnedOpen = !overlap;
  setDockOpen(!overlap);
}

let dockRaf = null;
function scheduleDockUpdate() {
  if (dockRaf) return;
  dockRaf = requestAnimationFrame(() => {
    dockRaf = null;
    updateDockState();
  });
}

dockHandle.addEventListener("click", (e) => {
  e.stopPropagation();
  setDockOpen(!dock.classList.contains("open"));
});

document.addEventListener("click", (e) => {
  if (!dockPinnedOpen && dock.classList.contains("open") && !dock.contains(e.target)) {
    setDockOpen(false);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !dockPinnedOpen) setDockOpen(false);
});

window.addEventListener("scroll", scheduleDockUpdate, { passive: true });
window.addEventListener("resize", scheduleDockUpdate);
window.addEventListener("load", updateDockState);
updateDockState();

langToggle.addEventListener("click", () => {
  const current = localStorage.getItem("resume-lang") === "en" ? "en" : "vi";
  applyLanguage(current === "en" ? "vi" : "en");
});

// Tạo PDF trực tiếp từ trang: dùng hộp thoại in của trình duyệt
// (đã có sẵn CSS @media print) nên bản PDF luôn khớp ngôn ngữ đang xem.
pdfDownload.addEventListener("click", () => {
  const lang = localStorage.getItem("resume-lang") === "en" ? "en" : "vi";
  const styleSuffix = isHarvardActive() ? "-Harvard" : "";
  // Tên file gợi ý khi chọn "Save as PDF" chính là document.title.
  const prevTitle = document.title;
  document.title = `Tran-Phuc-Lan-CV${styleSuffix}-${lang}`;
  window.addEventListener(
    "afterprint",
    () => {
      document.title = prevTitle;
    },
    { once: true }
  );
  window.print();
});

applyStyle(getInitialStyle());
applyLanguage(getInitialLanguage());
