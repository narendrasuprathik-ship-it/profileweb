const tracks = [
  {
    title: "Founder's Office Automation",
    company: "Purezen",
    role: "Founder's Office",
    kind: "Work Experience",
    duration: "4:12",
    link: "projects/purezen-founders-office.html?v=12",
    explicit: true,
    problem: "Retention and AOV were underperforming due to static segmentation and manual campaign setup.",
    approach: "Built dynamic cohort tagging and automated campaign logic across Shopify Flow and ZOKO.",
    tools: "Shopify Flow, ZOKO, RFM segmentation, persona-led GTM planning",
    result: "Repeat purchases +30%, AOV +18%, and manual segmentation effort reduced by 95%."
  },
  {
    title: "Ather Case Analysis",
    company: "Manipal Institute of Technology",
    role: "Finance + ML Case Analysis",
    kind: "Project",
    duration: "3:58",
    link: "projects/ather-case-analysis.html?v=12",
    explicit: false,
    problem: "Subsidy cuts created uncertainty in profitability and strategic planning.",
    approach: "Combined financial modeling with ML-based scenario analysis and dashboard communication.",
    tools: "Power BI, Tableau, forecasting models, SWOT framework",
    result: "Reconciled projected and actual losses and delivered actionable optimization recommendations."
  },
  {
    title: "Web Vulnerability Scanner",
    company: "Manipal Institute of Technology",
    role: "Python Security Engineering",
    kind: "Project",
    duration: "4:25",
    link: "projects/web-vulnerability-scanner.html?v=12",
    explicit: true,
    problem: "Needed a practical scanner to detect common web vulnerabilities reliably at scale.",
    approach: "Engineered recursive crawling + fuzzing with robust exception handling and report automation.",
    tools: "Python, argparse, Flask test app, OWASP Top 10 checks",
    result: "Achieved 100% detection on known seeded flaws in controlled validation."
  },
  {
    title: "SaaS Profitability Pricing",
    company: "Manipal Institute of Technology",
    role: "ML + Pricing Strategy",
    kind: "Project",
    duration: "3:11",
    link: "projects/saas-profitability-pricing.html?v=12",
    explicit: false,
    problem: "SaaS cohorts showed under-profitability and inefficient pricing structures.",
    approach: "Modeled pricing-performance relationships using regression and ensemble methods across cohorts.",
    tools: "Logistic regression, ensemble modeling, cohort analytics, 3C pipeline",
    result: "Projected +43% ARR, ~5% churn reduction, and ~4% LTV uplift."
  }
];

const trackList = document.getElementById("trackList");
const playAll = document.getElementById("playAll");
const nowTitle = document.getElementById("nowTitle");
const nowSub = document.getElementById("nowSub");
const caseLink = document.getElementById("caseLink");
const tabButtons = document.querySelectorAll(".tab-btn");
const pageTransition = document.getElementById("pageTransition");
const transitionTitle = document.getElementById("transitionTitle");
const heroCover = document.getElementById("heroCover");
const storyProblem = document.getElementById("storyProblem");
const storyApproach = document.getElementById("storyApproach");
const storyTools = document.getElementById("storyTools");
const storyResult = document.getElementById("storyResult");
const isWorkPage = window.location.pathname.includes("/showcase/work.html");
const basePrefix = isWorkPage ? "../" : "";

let currentIndex = 0;

function navigateWithTransition(url, title) {
  if (!url || url === "#") {
    return;
  }
  const resolvedUrl = url.startsWith("http") ? url : `${basePrefix}${url}`;

  if (!pageTransition || !transitionTitle) {
    window.location.href = resolvedUrl;
    return;
  }

  transitionTitle.textContent = title ? `Now Opening: ${title}` : "Opening case study";
  pageTransition.classList.add("active");

  window.setTimeout(() => {
    window.location.href = resolvedUrl;
  }, 520);
}

function renderTracks() {
  trackList.innerHTML = "";

  tracks.forEach((track, index) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = `track-row row${index === currentIndex ? " active" : ""}`;
    const explicit = track.explicit ? '<span class="badge">E</span>' : "";

    row.innerHTML = `
      <span class="track-num">${index + 1}</span>
      <span class="track-main">
        <span class="track-title">${track.title}</span>
        <span class="track-sub">${explicit}${track.company} • ${track.role} • ${track.kind}</span>
      </span>
      <span class="track-duration">${track.duration}</span>
    `;

    row.addEventListener("click", () => {
      if (index === currentIndex) {
        navigateWithTransition(track.link, track.title);
        return;
      }
      setTrack(index);
    });
    trackList.appendChild(row);
  });
}

function setTrack(index) {
  currentIndex = index;
  const track = tracks[index];
  nowTitle.textContent = `Now viewing: ${track.title}`;
  nowSub.textContent = `${track.company} • ${track.role} • ${track.kind}`;
  caseLink.href = track.link;
  caseLink.textContent = `Open case study: ${track.title}`;
  caseLink.setAttribute("aria-label", `Open case study for ${track.title}`);
  if (storyProblem) storyProblem.textContent = track.problem;
  if (storyApproach) storyApproach.textContent = track.approach;
  if (storyTools) storyTools.textContent = track.tools;
  if (storyResult) storyResult.textContent = track.result;
  renderTracks();
}

function setSection(sectionKey) {
  if (!sectionKey) {
    return;
  }
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === sectionKey);
  });
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.nav) {
      window.location.href = btn.dataset.nav;
      return;
    }
    if (btn.dataset.section === "me") {
      window.location.href = isWorkPage ? "me.html" : "showcase/me.html";
      return;
    }
    if (btn.dataset.section === "hobbies") {
      window.location.href = isWorkPage ? "hobbies.html" : "showcase/hobbies.html";
      return;
    }
    if (btn.dataset.section === "leadership") {
      window.location.href = isWorkPage ? "leadership.html" : "showcase/leadership.html";
      return;
    }
    if (btn.dataset.section === "resume") {
      window.location.href = isWorkPage ? "../assets/Suprathik_Narendra_Resume.pdf" : "assets/Suprathik_Narendra_Resume.pdf";
      return;
    }
    if (btn.dataset.section === "work") {
      window.location.href = isWorkPage ? "work.html" : "showcase/work.html";
      return;
    }
    setSection(btn.dataset.section);
  });
});

caseLink.addEventListener("click", (event) => {
  event.preventDefault();
  const track = tracks[currentIndex];
  navigateWithTransition(track.link, track.title);
});

if (heroCover) {
  heroCover.addEventListener("click", () => {
    const track = tracks[currentIndex];
    navigateWithTransition(track.link, track.title);
  });
}

if (playAll) {
  playAll.addEventListener("click", () => {
    const next = (currentIndex + 1) % tracks.length;
    setTrack(next);
  });
}

if (trackList && nowTitle && nowSub && caseLink) {
  setTrack(0);
  if (Array.from(tabButtons).some((btn) => btn.dataset.section)) {
    setSection("work");
  }
}
