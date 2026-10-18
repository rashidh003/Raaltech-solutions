/* =========================================================
   RAALTECH Solutions — I³C (IPR Services)
   Shared header / footer + site behaviour
   ========================================================= */

/* ---- Site settings: edit these in one place ---- */
const SITE = {
  name: "RAALTECH Solutions",
  consortium: "International Industry, Institutions & Innovation Consortium (I³C)",
  tagline: "Collaborate. Innovate. Protect IP.",
  contactPerson: "Dr. A. Matheswaran",
  contactRole: "Technical Lead – RAALTECH Solutions",
  phoneDisplay: "+91 98944 07323",
  phoneLink: "+919894407323",
  whatsapp: "919894407323",
  email: "", // add an official e-mail address here to show it across the site
  conferenceUrl: "https://iciprrdac.com/",
  publicationsUrl: "https://raaltechpublications.com/",
  // Replace "#" with the official profile URLs. Empty strings hide the icon.
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
    x: "#"
  }
};

const NAV = [
  { label: "Home", href: "index.html", page: "home" },
  {
    label: "About Us", href: "about.html", page: "about", children: [
      { label: "Overview", href: "about.html#overview", icon: "fa-building-columns" },
      { label: "Vision & Mission", href: "about.html#vision-mission", icon: "fa-bullseye" },
      { label: "Purpose", href: "about.html#purpose", icon: "fa-compass" },
      { label: "Our Collaborative Community", href: "about.html#community", icon: "fa-people-group" },
      { label: "Activities", href: "about.html#activities", icon: "fa-diagram-project" }
    ]
  },
  {
    label: "Leadership", href: "leadership.html", page: "leadership", children: [
      { label: "Governing Council", href: "leadership.html#governing-council", icon: "fa-landmark" },
      { label: "Executive Committee", href: "leadership.html#executive-committee", icon: "fa-user-tie" },
      { label: "Advisory Council", href: "leadership.html#advisory-council", icon: "fa-lightbulb" },
      { label: "Industry Experts Council", href: "leadership.html#industry-experts", icon: "fa-industry" },
      { label: "Academic & Research Council", href: "leadership.html#academic-research", icon: "fa-graduation-cap" },
      { label: "IP Advisory Panel", href: "leadership.html#ip-advisory", icon: "fa-scale-balanced" },
      { label: "International Council", href: "leadership.html#international-council", icon: "fa-earth-asia" },
      { label: "Council Members & Office Bearers", href: "leadership.html#office-bearers", icon: "fa-id-badge" }
    ]
  },
  {
    label: "Membership", href: "membership.html", page: "membership", children: [
      { label: "Membership Categories", href: "membership.html#categories", icon: "fa-layer-group" },
      { label: "Membership Benefits", href: "membership.html#benefits", icon: "fa-gift" },
      { label: "Membership Fees", href: "membership.html#fees", icon: "fa-indian-rupee-sign" },
      { label: "Apply for Membership", href: "membership.html#apply", icon: "fa-file-signature" },
      { label: "Members Directory", href: "membership.html#directory", icon: "fa-address-book" }
    ]
  },
  {
    label: "Events", href: "events.html", page: "events", children: [
      { label: "International Conferences", href: "events.html#conferences", icon: "fa-globe" },
      { label: "Training, Seminars & Workshops", href: "events.html#training", icon: "fa-chalkboard-user" },
      { label: "Expert Lectures", href: "events.html#lectures", icon: "fa-microphone-lines" }
    ]
  },
  {
    label: "Awards", href: "awards.html", page: "awards", children: [
      { label: "Award Categories", href: "awards.html#categories", icon: "fa-trophy" },
      { label: "Nomination & Eligibility", href: "awards.html#nomination", icon: "fa-clipboard-check" },
      { label: "Evaluation, Selection & Fee", href: "awards.html#evaluation", icon: "fa-scale-balanced" },
      { label: "Previous Awardees", href: "awards.html#previous", icon: "fa-medal" },
      { label: "Apply for Awards", href: "awards.html#apply", icon: "fa-paper-plane" }
    ]
  },
  {
    label: "Publications", href: "publications.html", page: "publications", children: [
      { label: "Newsletters", href: "publications.html#newsletters", icon: "fa-newspaper" },
      { label: "Technical Reports", href: "publications.html#reports", icon: "fa-file-lines" },
      { label: "Research Publications", href: "publications.html#research", icon: "fa-book-open" },
      { label: "Case Studies", href: "publications.html#case-studies", icon: "fa-magnifying-glass-chart" }
    ]
  },
  { label: "Announcements", href: "announcements.html", page: "announcements", badge: "New" },
  { label: "Contact", href: "contact.html", page: "contact" }
];

const ICONS = { facebook: "fa-facebook-f", linkedin: "fa-linkedin-in", instagram: "fa-instagram", youtube: "fa-youtube", x: "fa-x-twitter" };

function socialLinks() {
  return Object.entries(SITE.social)
    .filter(([, url]) => url)
    .map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${k}"><i class="fa-brands ${ICONS[k]}"></i></a>`)
    .join("");
}

function brandHTML() {
  return `
    <a class="brand" href="index.html" aria-label="${SITE.name} — Home">
      <img src="assets/img/raaltech-mark.png" alt="RAALTECH logo" width="62" height="52">
      <span class="brand-text">
        <span class="brand-name">RAAL<b>TECH</b> Solutions</span>
        <span class="brand-sub">IPR Services · I³C Consortium</span>
      </span>
    </a>`;
}

function renderHeader(current) {
  const items = NAV.map((item) => {
    const active = item.page === current ? " active" : "";
    const badge = item.badge ? ` <span class="badge-new">${item.badge}</span>` : "";
    if (!item.children) {
      return `<li class="nav-item"><a class="nav-link${active}" href="${item.href}">${item.label}${badge}</a></li>`;
    }
    const sub = item.children.map((c) => `<li><a href="${c.href}"><i class="fa-solid ${c.icon}"></i>${c.label}</a></li>`).join("");
    return `
      <li class="nav-item has-children">
        <a class="nav-link${active}" href="${item.href}" aria-haspopup="true">${item.label} <i class="fa-solid fa-chevron-down"></i></a>
        <ul class="dropdown">${sub}</ul>
      </li>`;
  }).join("");

  const emailBit = SITE.email ? `<a class="hide-sm" href="mailto:${SITE.email}"><i class="fa-solid fa-envelope"></i>${SITE.email}</a>` : "";

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="topbar">
      <div class="container">
        <div class="topbar-info">
          <a href="tel:${SITE.phoneLink}"><i class="fa-solid fa-phone"></i>${SITE.phoneDisplay}</a>
          ${emailBit}
          <a class="topbar-ticker hide-sm" href="announcements.html"><span class="pill">NEW</span> ICIPRRDAC 2026 · 1–4 Dec · Shinawatra University, Thailand</a>
        </div>
        <div class="topbar-social">${socialLinks()}</div>
      </div>
    </div>
    <header class="site-header" id="siteHeader">
      <div class="container">
        ${brandHTML()}
        <nav class="nav" id="siteNav" aria-label="Main navigation">
          <button class="nav-toggle nav-close" type="button" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
          <ul>${items}</ul>
          <a class="btn btn-primary btn-sm nav-cta" href="membership.html#apply"><i class="fa-solid fa-user-plus"></i> Join I³C</a>
        </nav>
        <button class="nav-toggle" id="navOpen" type="button" aria-label="Open menu" aria-controls="siteNav" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
      </div>
    </header>
    <div class="nav-overlay" id="navOverlay"></div>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  const emailRow = SITE.email ? `<li><i class="fa-solid fa-envelope"></i><a href="mailto:${SITE.email}">${SITE.email}</a></li>` : "";
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <span class="logo-box"><img src="assets/img/raaltech-logo.png" alt="RAALTECH logo" width="190" height="54" style="width:auto"></span>
          <div class="brand-name">RAAL<b>TECH</b> Solutions</div>
          <div class="brand-sub">IPR Services · I³C Consortium</div>
          <p>The ${SITE.consortium} brings industries, institutions, innovators and IP professionals together to turn knowledge into impact.</p>
          <div class="social">${socialLinks()}</div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul class="footer-links">
            <li><a href="about.html">About I³C</a></li>
            <li><a href="leadership.html">Leadership &amp; Councils</a></li>
            <li><a href="membership.html">Membership</a></li>
            <li><a href="events.html">Events &amp; Programmes</a></li>
            <li><a href="awards.html">Awards &amp; Recognition</a></li>
            <li><a href="publications.html">Publications &amp; Resources</a></li>
            <li><a href="announcements.html">Announcements</a></li>
          </ul>
        </div>
        <div>
          <h4>Policies</h4>
          <ul class="footer-links">
            <li><a href="policies.html#privacy">Privacy Policy</a></li>
            <li><a href="policies.html#terms">Terms &amp; Conditions</a></li>
            <li><a href="policies.html#membership-rules">Membership Rules</a></li>
            <li><a href="policies.html#code-of-conduct">Code of Conduct</a></li>
            <li><a href="policies.html#disclaimer">Disclaimer</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <ul class="footer-contact">
            <li><i class="fa-solid fa-user"></i><span><strong style="color:#fff">${SITE.contactPerson}</strong><br>${SITE.contactRole}</span></li>
            <li><i class="fa-solid fa-phone"></i><a href="tel:${SITE.phoneLink}">${SITE.phoneDisplay}</a></li>
            ${emailRow}
            <li><i class="fa-solid fa-globe"></i><a href="${SITE.conferenceUrl}" target="_blank" rel="noopener">iciprrdac.com</a></li>
            <li><i class="fa-solid fa-book"></i><a href="${SITE.publicationsUrl}" target="_blank" rel="noopener">raaltechpublications.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <span>© ${year} ${SITE.name}. All rights reserved.</span>
          <nav aria-label="Legal">
            <a href="policies.html#privacy">Privacy</a>
            <a href="policies.html#terms">Terms</a>
            <a href="policies.html#disclaimer">Disclaimer</a>
          </nav>
        </div>
      </div>
    </footer>
    <a class="wa-float" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
    <button class="to-top" id="toTop" type="button" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>`;
}

/* ---- Behaviour ---- */
function initNav() {
  const nav = document.getElementById("siteNav");
  const openBtn = document.getElementById("navOpen");
  const overlay = document.getElementById("navOverlay");
  const closeBtn = nav.querySelector(".nav-close");
  const mobile = () => window.matchMedia("(max-width: 1300px)").matches;

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    overlay.classList.toggle("show", open);
    openBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  openBtn.addEventListener("click", () => setOpen(true));
  closeBtn.addEventListener("click", () => setOpen(false));
  overlay.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

  // On mobile, the first tap on a parent item expands its submenu
  nav.querySelectorAll(".has-children > .nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (!mobile()) return;
      const li = link.parentElement;
      if (!li.classList.contains("open")) {
        e.preventDefault();
        nav.querySelectorAll(".nav-item.open").forEach((o) => o !== li && o.classList.remove("open"));
        li.classList.add("open");
      }
    });
  });
  nav.querySelectorAll(".dropdown a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
}

function initScroll() {
  const header = document.getElementById("siteHeader");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 10);
    toTop.classList.toggle("show", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => io.observe(el));
}

function initSubnav() {
  const links = [...document.querySelectorAll(".subnav a[href^='#']")];
  if (!links.length) return;
  const targets = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  targets.forEach((t) => io.observe(t));
}

/* Forms: no server needed — the enquiry is composed and handed to WhatsApp */
function initForms() {
  document.querySelectorAll("form[data-form]").forEach((form) => {
    const status = form.querySelector(".form-status");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll("[required]").forEach((f) => {
        const ok = f.type === "checkbox" ? f.checked : f.value.trim() !== "" && f.checkValidity();
        f.classList.toggle("invalid", !ok);
        if (!ok) valid = false;
      });
      if (!valid) {
        status.textContent = "Please complete the highlighted fields.";
        status.className = "form-status show error";
        return;
      }
      const title = form.dataset.title || "Website enquiry";
      const lines = [`*${title}* (via website)`];
      form.querySelectorAll("input, select, textarea").forEach((f) => {
        if (f.type === "checkbox" || !f.value.trim()) return;
        const label = form.querySelector(`label[for="${f.id}"]`);
        lines.push(`${label ? label.textContent.replace("*", "").trim() : f.name}: ${f.value.trim()}`);
      });
      const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(url, "_blank", "noopener");
      status.innerHTML = `Thank you! WhatsApp has opened with your details — just press send. If it did not open, <a href="${url}" target="_blank" rel="noopener">click here</a> or call ${SITE.phoneDisplay}.`;
      status.className = "form-status show";
      form.reset();
    });
    form.querySelectorAll("input, select, textarea").forEach((f) => f.addEventListener("input", () => f.classList.remove("invalid")));
  });

  // Preselect a category from a link like membership.html?category=Student#apply
  const params = new URLSearchParams(location.search);
  document.querySelectorAll("select[data-param]").forEach((sel) => {
    const v = params.get(sel.dataset.param);
    if (v && [...sel.options].some((o) => o.value === v)) sel.value = v;
  });
}

function initLightbox() {
  const triggers = document.querySelectorAll("[data-lightbox]");
  if (!triggers.length) return;
  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.innerHTML = `<button type="button" aria-label="Close"><i class="fa-solid fa-xmark"></i></button><img alt="">`;
  document.body.appendChild(box);
  const img = box.querySelector("img");
  const close = () => { box.classList.remove("open"); document.body.style.overflow = ""; };
  const open = (t) => {
    img.src = t.dataset.lightbox;
    img.alt = t.dataset.alt || "";
    box.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  triggers.forEach((t) => {
    t.addEventListener("click", () => open(t));
    t.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(t); } });
  });
  box.addEventListener("click", (e) => { if (e.target !== img) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "";
  const head = document.getElementById("site-header");
  const foot = document.getElementById("site-footer");
  if (head) head.outerHTML = renderHeader(page);
  if (foot) foot.outerHTML = renderFooter();
  document.querySelectorAll("[data-phone]").forEach((el) => { el.textContent = SITE.phoneDisplay; });
  initNav();
  initScroll();
  initReveal();
  initSubnav();
  initForms();
  initLightbox();
});
