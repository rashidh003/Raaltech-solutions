/* =========================================================
   I³RC — International Industry, Institutions, Innovation & Research Consortium
   Shared header / footer + site behaviour
   ========================================================= */

/* ---- Site settings: edit these in one place ---- */
const SITE = {
  name: "International Industry, Institutions, Innovation & Research Consortium",
  short: "I³RC",
  tagline: "Collaborate. Innovate. Protect.",
  // Number shown for calls and queries
  phoneDisplay: "+91 70940 77040",
  phoneLink: "+917094077040",
  // Number that receives WhatsApp messages and form submissions
  whatsapp: "919894407323",
  // Gmail address that receives every form submission (via FormSubmit.co).
  // Put the address between the quotes, e.g. "yourname@gmail.com". The first
  // submission sends a one-time activation email to that inbox — click it once.
  formEmail: "",
  email: "iiirc@gmail.com", // official e-mail address shown across the site
  // Postal address shown on the Contact page and in the footer. Use "\n" for line breaks.
  address: "",
  conferenceUrl: "https://iciprrdac.com/",
  // Replace "#" with the official profile URLs. Empty strings hide the icon.
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
    x: "#"
  }
};

/* Scrolling announcements shown in the top bar of every page */
const ANNOUNCEMENTS = [
  { text: "ICIPRRDAC 2026 — International Conference on IPR, R&D & Awards Ceremony · 1–4 Dec 2026 · Shinawatra University, Thailand", href: "announcements.html" },
  { text: "I³RC Membership now open for industries, institutions, faculty, researchers, startups, MSMEs & students", href: "membership.html#apply" },
  { text: "Call for Award Nominations — I³RC Awards of Excellence", href: "awards.html#apply" },
  { text: "Propose a collaborative event or request support from I³RC", href: "collaboration.html#request-form" }
];

/* Orange announcement strip shown below the main menu on every page */
const HIGHLIGHTS = [
  { text: "ICIPRRDAC 2026 — International Conference on IPR, R&D & Awards Ceremony · 1–4 Dec 2026 · Thailand", link: "View details", href: "announcements.html" },
  { text: "I³RC Membership now open", link: "Apply now", href: "membership.html#apply" },
  { text: "Call for Award Nominations", link: "Nominate", href: "awards.html#apply" },
  { text: "Collaboration Activities & Support Requests open", link: "Submit a proposal", href: "collaboration.html#request-form" }
];

/* Sustainable Development Goals supported by I³RC (shown in the footer) */
const SDGS = [
  { no: 4, title: "Quality Education" },
  { no: 9, title: "Industry, Innovation and Infrastructure" },
  { no: 17, title: "Partnerships for the Goals" }
];

const NAV = [
  { label: "Home", href: "index.html", page: "home" },
  {
    label: "About Us", href: "about.html", page: "about", children: [
      { label: "Overview", href: "about.html#overview", icon: "fa-building-columns" },
      { label: "Vision & Mission", href: "about.html#vision-mission", icon: "fa-bullseye" },
      { label: "Purpose", href: "about.html#purpose", icon: "fa-compass" },
      { label: "Our Collaborative Community", href: "about.html#community", icon: "fa-people-group" },
      { label: "Activities of I³RC", href: "about.html#activities", icon: "fa-diagram-project" }
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
    label: "Collaboration & Support", href: "collaboration.html", page: "collaboration", children: [
      { label: "Our Collaborative Community", href: "collaboration.html#community", icon: "fa-people-group" },
      { label: "Activities of I³RC", href: "collaboration.html#activities", icon: "fa-diagram-project" },
      { label: "Collaboration Activities & Support Request Form", href: "collaboration.html#request-form", icon: "fa-file-pen" }
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
    <a class="brand" href="index.html" aria-label="${SITE.short} — Home">
      <img src="assets/img/i3rc-logo-sm.png" alt="${SITE.short} logo" width="193" height="160">
      <span class="brand-text">
        <span class="brand-name">${SITE.name} <span class="brand-abbr">(${SITE.short})</span></span>
        <span class="brand-sub">${SITE.tagline}</span>
      </span>
    </a>`;
}

function tickerHTML() {
  const items = ANNOUNCEMENTS.map((a) => `<a href="${a.href}"><i class="fa-solid fa-bullhorn"></i>${a.text}</a>`).join("");
  return `
    <div class="ticker" aria-label="Announcements">
      <span class="ticker-label">NEW</span>
      <div class="marquee" data-marquee><div class="marquee-track">${items}</div></div>
    </div>`;
}

function highlightsHTML() {
  const items = HIGHLIGHTS.map((h) => `
            <span>${h.text}</span>
            <a href="${h.href}">${h.link} <i class="fa-solid fa-arrow-right"></i></a>
            <span class="sep">✦</span>`).join("");
  return `
    <div class="announce-strip" aria-label="Highlights">
      <div class="container">
        <span class="pill">Announcement</span>
        <div class="marquee" data-marquee><div class="marquee-track">${items}</div></div>
      </div>
    </div>`;
}

function sdgHTML() {
  const tiles = SDGS.map((g) => `<li><img src="assets/img/sdg/sdg-${String(g.no).padStart(2, "0")}.png" alt="SDG ${g.no}: ${g.title}" title="SDG ${g.no}: ${g.title}" width="113" height="113" loading="lazy"></li>`).join("");
  return `
      <div class="footer-sdg">
        <div class="container">
          <div class="sdg-text">
            <span class="sdg-label">We support the</span>
            <strong>Sustainable Development Goals</strong>
            <span>SDG ${SDGS.map((g) => g.no).join(", ").replace(/, (\d+)$/, " &amp; $1")}</span>
          </div>
          <ul class="sdg-tiles">${tiles}</ul>
        </div>
      </div>`;
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

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="topbar">
      <div class="container">
        ${tickerHTML()}
        <div class="topbar-social">${socialLinks()}</div>
      </div>
    </div>
    <div class="brandbar" id="brandbar">
      <div class="container">
        ${brandHTML()}
        <a class="btn btn-primary btn-sm brand-cta" href="membership.html#apply"><i class="fa-solid fa-user-plus"></i> Join ${SITE.short}</a>
        <button class="nav-toggle" id="navOpen" type="button" aria-label="Open menu" aria-controls="siteNav" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
    <header class="site-header" id="siteHeader">
      <div class="container">
        <nav class="nav" id="siteNav" aria-label="Main navigation">
          <button class="nav-toggle nav-close" type="button" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
          <ul>${items}</ul>
          <a class="btn btn-primary btn-sm nav-cta" href="membership.html#apply"><i class="fa-solid fa-user-plus"></i> Join ${SITE.short}</a>
        </nav>
      </div>
    </header>
    ${highlightsHTML()}
    <div class="nav-overlay" id="navOverlay"></div>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  const emailRow = SITE.email ? `<li><i class="fa-solid fa-envelope"></i><a href="mailto:${SITE.email}">${SITE.email}</a></li>` : "";
  const addressRow = SITE.address ? `<li><i class="fa-solid fa-location-dot"></i><span>${SITE.address.replace(/\n/g, "<br>")}</span></li>` : "";
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <span class="logo-box"><img src="assets/img/i3rc-logo.png" alt="${SITE.short} logo" width="362" height="300"></span>
          <div class="brand-name">${SITE.short}</div>
          <div class="brand-sub">${SITE.tagline}</div>
          <p>The ${SITE.name} (${SITE.short}) brings industries, institutions, innovators, researchers and IP professionals together to turn knowledge into impact.</p>
          <div class="social">${socialLinks()}</div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul class="footer-links">
            <li><a href="about.html">About ${SITE.short}</a></li>
            <li><a href="leadership.html">Leadership &amp; Councils</a></li>
            <li><a href="membership.html">Membership</a></li>
            <li><a href="events.html">Events &amp; Programmes</a></li>
            <li><a href="awards.html">Awards &amp; Recognition</a></li>
            <li><a href="collaboration.html">Collaboration &amp; Support</a></li>
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
            <li><i class="fa-solid fa-phone"></i><a href="tel:${SITE.phoneLink}">${SITE.phoneDisplay}</a></li>
            <li><i class="fa-brands fa-whatsapp"></i><a href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener">Chat on WhatsApp</a></li>
            ${emailRow}
            ${addressRow}
            <li><i class="fa-solid fa-globe"></i><a href="${SITE.conferenceUrl}" target="_blank" rel="noopener">iciprrdac.com</a></li>
          </ul>
        </div>
      </div>
      ${sdgHTML()}
      <div class="footer-bottom">
        <div class="container">
          <span>© ${year} ${SITE.name} (${SITE.short}). All rights reserved.</span>
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
const MOBILE_NAV = "(max-width: 1080px)";

function initNav() {
  const nav = document.getElementById("siteNav");
  const openBtn = document.getElementById("navOpen");
  const overlay = document.getElementById("navOverlay");
  const closeBtn = nav.querySelector(".nav-close");
  const mobile = () => window.matchMedia(MOBILE_NAV).matches;

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
  const brandbar = document.getElementById("brandbar");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 10);
    brandbar.classList.toggle("scrolled", y > 10);
    toTop.classList.toggle("show", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* Continuous scrolling strips: the content is duplicated so the loop is seamless */
function initMarquees() {
  document.querySelectorAll("[data-marquee]").forEach((m) => {
    const track = m.querySelector(".marquee-track");
    if (!track || track.dataset.ready) return;
    const group = document.createElement("div");
    group.className = "marquee-group";
    group.append(...track.childNodes);
    const copy = group.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    copy.querySelectorAll("a").forEach((a) => a.setAttribute("tabindex", "-1"));
    track.append(group, copy);
    track.dataset.ready = "1";
    // Keep a steady reading speed whatever the content length
    track.style.animationDuration = Math.max(20, group.scrollWidth / 60) + "s";
  });
}

/* Animated "innovation network" behind the hero banners */
function initHeroFx() {
  const heroes = document.querySelectorAll(".hero, .page-hero, .conf-hero");
  if (!heroes.length) return;
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  heroes.forEach((hero) => {
    const canvas = document.createElement("canvas");
    canvas.className = "hero-fx";
    canvas.setAttribute("aria-hidden", "true");
    hero.prepend(canvas);
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, nodes = [], visible = true, raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = hero.clientWidth; h = hero.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(70, Math.max(24, (w * h) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
        r: Math.random() * 1.8 + 1, hot: Math.random() < .22
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const max = 130;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < max) {
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / max) * .22})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.fillStyle = n.hot ? "rgba(255,140,60,.9)" : "rgba(255,255,255,.7)";
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      });
    };

    const step = () => {
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });
      draw();
      raf = visible ? requestAnimationFrame(step) : 0;
    };

    resize();
    draw();
    window.addEventListener("resize", () => { resize(); draw(); });
    if (still) return;
    new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(step);
    }).observe(hero);
  });
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

/* ---- Forms ----
   Every submission is (1) e-mailed to SITE.formEmail through FormSubmit.co,
   including any uploaded files, and (2) handed to WhatsApp pre-filled. */
const MAX_UPLOAD = 10 * 1024 * 1024; // FormSubmit limit for all files together

function fieldLabel(form, f) {
  const label = f.id && form.querySelector(`label[for="${f.id}"]`);
  const text = label ? label.textContent : f.getAttribute("aria-label") || f.id || "Field";
  return text.replace(/\*/g, "").replace(/\s+/g, " ").trim();
}

function hiddenInput(form, name, value) {
  let input = form.querySelector(`input[type="hidden"][name="${name}"]`);
  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    form.appendChild(input);
  }
  input.value = value;
  return input;
}

/* Show/hide blocks such as "Nominator's details" or "Other (please specify)".
   Hidden blocks are disabled, so they are neither validated nor sent. */
function syncConditional(form) {
  form.querySelectorAll("[data-show-if]").forEach((block) => {
    const show = !!form.querySelector(block.dataset.showIf);
    block.hidden = !show;
    block.querySelectorAll("input, select, textarea").forEach((f) => { f.disabled = !show; });
  });
}

/* Checkbox groups are sent as one readable line, e.g. "Types: A, B, C" */
function syncGroups(form) {
  form.querySelectorAll("[data-group]").forEach((group) => {
    const picked = [...group.querySelectorAll("input[type='checkbox']:checked")].map((c) => c.value);
    let input = group.querySelector("input[type='hidden']");
    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = group.dataset.group;
      group.appendChild(input);
    }
    input.value = picked.join(", ");
  });
}

function validate(form) {
  let valid = true;
  const mark = (el, ok) => { el.classList.toggle("invalid", !ok); if (!ok) valid = false; };

  form.querySelectorAll("[required]:not(:disabled)").forEach((f) => {
    if (f.type === "radio") {
      const group = f.closest(".field");
      mark(group, !!form.querySelector(`input[type="radio"][name="${f.name}"]:checked`));
    } else if (f.type === "checkbox") {
      mark(f.closest(".check") || f, f.checked);
    } else {
      mark(f, f.value.trim() !== "" && f.checkValidity());
    }
  });
  form.querySelectorAll("[data-group][data-required]").forEach((g) => mark(g, !!g.querySelector("input:checked")));

  let bytes = 0;
  form.querySelectorAll("input[type='file']:not(:disabled)").forEach((f) => [...f.files].forEach((file) => { bytes += file.size; }));
  return { valid, tooBig: bytes > MAX_UPLOAD };
}

function whatsappText(form) {
  const lines = [`*${form.dataset.title || "Website enquiry"}* (via website)`];
  const files = [];
  const labels = {};
  form.querySelectorAll("[name][id]").forEach((f) => {
    if (form.querySelector(`label[for="${f.id}"]`)) labels[f.name] = fieldLabel(form, f);
  });
  for (const [name, value] of new FormData(form)) {
    if (name.startsWith("_")) continue;
    if (value instanceof File) { if (value.name) files.push(value.name); continue; }
    if (String(value).trim()) lines.push(`${labels[name] || name}: ${String(value).trim()}`);
  }
  if (files.length) lines.push(`Attachments (sent by e-mail): ${files.join(", ")}`);
  return lines.join("\n");
}

/* Posts the form natively into a hidden iframe so file uploads work on a static site */
function sendEmail(form) {
  const frame = document.getElementById("formSink");
  if (!SITE.formEmail || !frame) {
    console.warn("SITE.formEmail is empty in assets/js/main.js — submissions are only sent to WhatsApp.");
    return Promise.resolve();
  }
  hiddenInput(form, "_subject", `${form.dataset.title || "Website enquiry"} — I3RC website`);
  hiddenInput(form, "_captcha", "false");
  hiddenInput(form, "_template", "table");
  if (/^https?:/.test(location.protocol)) hiddenInput(form, "_next", new URL("thanks.html", location.href).href);
  form.action = `https://formsubmit.co/${SITE.formEmail}`;
  form.method = "POST";
  form.enctype = "multipart/form-data";
  form.target = frame.name;

  return new Promise((resolve) => {
    const done = () => { clearTimeout(timer); frame.removeEventListener("load", done); resolve(); };
    const timer = setTimeout(done, 20000);
    frame.addEventListener("load", done);
    form.submit();
  });
}

function initForms() {
  const forms = document.querySelectorAll("form[data-form]");
  // Created up front so its initial about:blank load is not mistaken for a reply
  if (forms.length && SITE.formEmail) {
    const frame = document.createElement("iframe");
    frame.id = frame.name = "formSink";
    frame.title = "Form submission";
    frame.hidden = true;
    document.body.appendChild(frame);
  }

  forms.forEach((form) => {
    const status = form.querySelector(".form-status");
    const button = form.querySelector("button[type='submit']");
    const thanks = form.querySelector("template.form-thanks");

    // FormSubmit uses field names as the labels in the e-mail
    form.querySelectorAll("input, select, textarea").forEach((f) => {
      if (!f.name && !["checkbox", "radio", "hidden"].includes(f.type)) f.name = fieldLabel(form, f);
    });
    // Spam trap: real visitors never see or fill this
    if (!form.querySelector("[name='_honey']")) {
      const honey = document.createElement("input");
      honey.type = "text"; honey.name = "_honey"; honey.tabIndex = -1; honey.autocomplete = "off";
      honey.className = "sr-only"; honey.setAttribute("aria-hidden", "true");
      form.appendChild(honey);
    }

    syncConditional(form);
    form.addEventListener("change", () => syncConditional(form));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      syncConditional(form);
      const { valid, tooBig } = validate(form);
      if (!valid || tooBig) {
        status.textContent = tooBig
          ? "The uploaded files are larger than 10 MB in total. Please upload smaller files."
          : "Please complete the highlighted fields.";
        status.className = "form-status show error";
        form.querySelector(".invalid")?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      syncGroups(form);

      // Open WhatsApp straight away (inside the click) so pop-up blockers allow it
      const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappText(form))}`;
      window.open(waUrl, "_blank", "noopener");

      button.disabled = true;
      status.textContent = "Submitting…";
      status.className = "form-status show";

      sendEmail(form).then(() => {
        const message = thanks
          ? thanks.innerHTML
          : `<strong>Thank you!</strong> Your details have been submitted. Our team will contact you shortly. For queries, please contact ${SITE.phoneDisplay}.`;
        status.innerHTML = `${message}<span class="wa-again">WhatsApp did not open? <a href="${waUrl}" target="_blank" rel="noopener">Send your details on WhatsApp</a>.</span>`;
        status.className = "form-status show success";
        form.reset();
        syncConditional(form);
        button.disabled = false;
        status.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
    form.addEventListener("input", (e) => {
      e.target.classList.remove("invalid");
      e.target.closest(".invalid")?.classList.remove("invalid");
    });
  });

  // Preselect a category from a link like membership.html?category=Student#apply
  const params = new URLSearchParams(location.search);
  document.querySelectorAll("select[data-param]").forEach((sel) => {
    const v = params.get(sel.dataset.param);
    if (v && [...sel.options].some((o) => o.value === v)) sel.value = v;
  });
}

/* Members directory: a tab per membership category shows only that category's members */
function initDirectory() {
  document.querySelectorAll("[data-directory]").forEach((dir) => {
    const tabs = [...dir.querySelectorAll("[data-filter]")];
    const members = [...dir.querySelectorAll("[data-category]")];
    const empty = dir.querySelector(".dir-empty");
    const show = (cat) => {
      tabs.forEach((t) => t.setAttribute("aria-pressed", String(t.dataset.filter === cat)));
      let count = 0;
      members.forEach((m) => {
        const match = cat === "all" || m.dataset.category === cat;
        m.hidden = !match;
        if (match) count++;
      });
      if (empty) empty.hidden = count > 0;
    };
    tabs.forEach((t) => t.addEventListener("click", () => show(t.dataset.filter)));
    show((tabs.find((t) => t.getAttribute("aria-pressed") === "true") || tabs[0]).dataset.filter);
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
  document.querySelectorAll("[data-email]").forEach((el) => { el.textContent = SITE.email; el.href = `mailto:${SITE.email}`; });
  document.querySelectorAll("[data-address]").forEach((el) => { if (SITE.address) el.innerHTML = SITE.address.replace(/\n/g, "<br>"); });
  initNav();
  initScroll();
  initMarquees();
  initHeroFx();
  initReveal();
  initSubnav();
  initForms();
  initDirectory();
  initLightbox();
});

// Deep links (e.g. membership.html#directory): re-align once images have loaded and the layout has settled
window.addEventListener("load", () => {
  const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target) target.scrollIntoView();
});
