const tracks = [
  {
    title: "Founder's Office Automation",
    company: "Purezen",
    role: "Founder's Office",
    kind: "Work Experience",
    duration: "4:12",
    link: "projects/purezen-founders-office.html?v=12",
    explicit: true
  },
  {
    title: "Ather Case Analysis",
    company: "Manipal Institute of Technology",
    role: "Finance + ML Case Analysis",
    kind: "Project",
    duration: "3:58",
    link: "projects/ather-case-analysis.html?v=12",
    explicit: false
  },
  {
    title: "Web Vulnerability Scanner",
    company: "Manipal Institute of Technology",
    role: "Python Security Engineering",
    kind: "Project",
    duration: "4:25",
    link: "projects/web-vulnerability-scanner.html?v=12",
    explicit: true
  },
  {
    title: "SaaS Profitability Pricing",
    company: "Manipal Institute of Technology",
    role: "ML + Pricing Strategy",
    kind: "Project",
    duration: "3:11",
    link: "projects/saas-profitability-pricing.html?v=12",
    explicit: false
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

let currentIndex = 0;

function navigateWithTransition(url, title) {
  if (!url || url === "#") {
    return;
  }

  if (!pageTransition || !transitionTitle) {
    window.location.href = url;
    return;
  }

  transitionTitle.textContent = title ? `Now Opening: ${title}` : "Opening case study";
  pageTransition.classList.add("active");

  window.setTimeout(() => {
    window.location.href = url;
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
      currentIndex = index;
      navigateWithTransition(track.link, track.title);
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
  renderTracks();
}

function setSection(sectionKey) {
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === sectionKey);
  });
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.section === "me") {
      window.location.href = "showcase/me.html";
      return;
    }
    if (btn.dataset.section === "hobbies") {
      window.location.href = "showcase/hobbies.html";
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

playAll.addEventListener("click", () => {
  const next = (currentIndex + 1) % tracks.length;
  setTrack(next);
});

setTrack(0);
setSection("me");
