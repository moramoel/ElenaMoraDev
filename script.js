(function () {
  "use strict";

  var TITLE = "Elena Mora · Video Game Programmer";

  /* ============ THEME SWITCHING ============ */
  var themeToggle = document.getElementById('themeToggle');
  var html = document.documentElement;
  var themeIcon = themeToggle.querySelector('.theme-icon');
  
  // Comprobar si hay una preferencia guardada
  var savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  
  function updateThemeIcon(theme){
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  
  themeToggle.addEventListener('click', function(){
    var currentTheme = html.getAttribute('data-theme');
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Animación de transición
    themeIcon.style.transform = 'rotate(360deg)';
    setTimeout(function(){
      themeIcon.style.transform = '';
    }, 300);
  });
  
  // Respetar preferencia del sistema si no hay guardado
  if(!localStorage.getItem('theme')){
    if(window.matchMedia('(prefers-color-scheme: light)').matches){
      html.setAttribute('data-theme', 'light');
      updateThemeIcon('light');
    }
  }

  var PROJECTS = [
    {
      id: "multijugador",
      title: "Network multiplayer game",
      band: "linear-gradient(135deg,#2a1b52,#9E4784)",
      icon: "glyphicon-transfer",
      about: "Online multiplayer game made in a team with Unreal Engine 5 and C++. I didn't program the network layer, but I structured all the game code around synchronization between players.",
      myPart: "enemies, synchronized objects and levels.",
      tags: ["Unreal Engine 5", "C++", "Multiplayer", "AI"],
      parts: [
        "Game code structure designed from the start for network synchronization.",
        "Enemy behavior: patrol until they detect the player, then pursue and attack.",
        "System of objects the player can pick up and drop, synchronized between players. This was the part where synchronization mattered most.",
        "Game level design."
      ],
      facts: [["Engine", "Unreal Engine 5"], ["Language", "C++"], ["Team", "Teamwork"]]
    },
    {
      id: "bullet-hell",
      title: "Bullet hell for mobile",
      band: "linear-gradient(135deg,#9E4784,#d27685)",
      icon: "glyphicon-screenshot",
      about: "Bullet hell game for mobile made in Unity with C#, with a partner.",
      myPart: "enemy AI and shooting.",
      tags: ["Unity", "C#", "Mobile", "AI", "Partner project"],
      parts: ["Enemy artificial intelligence.", "Enemy shooting system."],
      facts: [["Engine", "Unity"], ["Language", "C#"], ["Platform", "Mobile"], ["Team", "With a partner"]]
    },
    {
      id: "infinite-runner",
      title: "Infinite runner for PC",
      band: "linear-gradient(135deg,#F49BAB,#D27685)",
      icon: "glyphicon-road",
      about: "Endless runner for PC made in Unity with C#, with a partner, with a procedurally generated map.",
      myPart: "procedural map and obstacles.",
      tags: ["Unity", "C#", "PC", "Procedural", "Partner project"],
      parts: ["Procedural map generation.", "Obstacle generation and placement."],
      facts: [["Engine", "Unity"], ["Language", "C#"], ["Platform", "PC"], ["Team", "With a partner"]]
    },
    {
      id: "vr",
      title: "Virtual reality game",
      band: "linear-gradient(135deg,#D27685,#F49BAB)",
      icon: "glyphicon-eye-open",
      about: "Virtual reality game made in Unity with C#, with a partner.",
      myPart: "enemies and maps.",
      tags: ["Unity", "C#", "VR", "AI", "Partner project"],
      parts: ["Game enemies.", "Map design and creation."],
      facts: [["Engine", "Unity"], ["Language", "C#"], ["Platform", "VR"], ["Team", "With a partner"]]
    },
    {
      id: "terreno-procedural",
      title: "Procedural terrain and forest",
      band: "linear-gradient(135deg,#5d5394,#9E4784)",
      icon: "glyphicon-leaf",
      about: "Graphics programming project in a group, done in C++ with the school's graphics library, OpenGL-style.",
      myPart: "procedural terrain, forest, water and skybox.",
      tags: ["C++", "School graphics library", "Graphics", "Procedural", "ImGui", "Group work"],
      parts: [
        "Chunk-based infinite terrain, generated with modified Perlin noise to achieve the desired look. Maximum height changes in real time from an ImGui panel and the terrain recalculates instantly.",
        "Forest generated with noise that recalculates along with the terrain, so trees avoid water and snowy areas.",
        "Water as a procedural surface with transparency, and caustics applied only to terrain underwater to simulate light reflection.",
        "Skybox with day-night cycle: a shader transitions between sky images, with adjustable speed from ImGui.",
        "Clouds and part of the project shaders."
      ],
      facts: [["Language", "C++"], ["Library", "School graphics library, OpenGL-style"], ["Tool", "ImGui"], ["Team", "Group work"]],
      video: "https://www.youtube.com/watch?v=S0qxzWMYjOU"
    },
    {
      id: "coming-soon",
      title: "Coming Soon",
      band: "var(--surface-2)",
      icon: "glyphicon-plus",
      about: "This year I'll add new projects. This card will be replaced by the first one I finish.",
      tags: ["In development"],
      parts: [],
      facts: [],
      soon: true
    },
    {
      id: "survive-the-candy",
      title: "Survive the Candy",
      band: "linear-gradient(135deg,#9E4784,#D27685)",
      icon: "glyphicon-flag",
      about: "2.5D time-attack game made in Unity with C# at the 2026 Global Game Jam in Valencia. It won the Best Work in Progress award. I was the lead programmer of a team of 4 programmers.",
      myPart: "lead programmer; enemy base, procedural forest and villages.",
      tags: ["Unity", "C#", "2.5D", "Lead", "Procedural", "Shaders", "Award"],
      parts: [
        "Researched whether 2.5D was viable for the project and created the project base in Unity with the right shaders.",
        "Programmed the base enemy behavior so the rest of the team could extend it.",
        "Developed the procedural forest generation and the instantiation of villages, creating a different map every game with shared parameters.",
        "As lead, helped the other programmers whenever they needed it and coordinated the work with the art department."
      ],
      facts: [
        ["Event", "Global Game Jam Valencia 2026"], ["Duration", "48 hours"], ["Engine", "Unity"],
        ["Language", "C#"], ["Team", "4 programmers"], ["Role", "Lead programmer"],
        ["Award", "Best Work in Progress"]
      ],
      link: "https://elenam.itch.io/survive-the-candy",
      videoEmbed: "https://player.vimeo.com/video/1238864386"
    },
    {
      id: "quack-adventures",
      title: "Quack Adventures",
      band: "linear-gradient(135deg,#d27685,#9E4784)",
      icon: "glyphicon-cloud",
      about: "2D local co-op platformer for PC made in Unity with C# at the 2025 Global Game Jam in Valencia. I was the lead programmer and responsible for the whole team, with 3 programmers.",
      myPart: "lead programmer; platform-placing player control.",
      tags: ["Unity", "C#", "2D", "Lead", "PC", "Local co-op"],
      parts: [
        "Coordinated the organization between departments and led the programming team.",
        "Programmed the control of the player who places platforms with the mouse to help the other player."
      ],
      facts: [
        ["Event", "Global Game Jam Valencia 2025"], ["Duration", "48 hours"], ["Engine", "Unity"],
        ["Language", "C#"], ["Platform", "PC"], ["Team", "3 programmers"], ["Role", "Lead programmer"]
      ],
      link: "https://zer0-zzz.itch.io/quack-adventures",
      videoEmbed: "https://player.vimeo.com/video/1085320170"
    },
    {
      id: "early-projects",
      title: "Early projects",
      band: "linear-gradient(135deg,#5d5394,#F49BAB)",
      icon: "glyphicon-book",
      about: "Two games from a few years ago that are still on my itch.io profile.",
      tags: ["itch.io"],
      parts: [],
      facts: [],
      ext: true,
      extLink: "https://elenam.itch.io",
      cta: "View my profile →"
    }
  ];

  var homeContent = document.getElementById("homeContent");
  var projectDetail = document.getElementById("projectDetail");

  function findIndex(hash) {
    for (var i = 0; i < PROJECTS.length; i++) {
      if (PROJECTS[i].id === hash) return i;
    }
    return -1;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderDetail(p, idx) {
    var factsHTML = (p.facts || []).map(function (f) {
      return '<div><small>' + esc(f[0]) + '</small>' + esc(f[1]) + '</div>';
    }).join("");

    var partsHTML = (p.parts || []).map(function (x) {
      return "<li>" + esc(x) + "</li>";
    }).join("");

    // Cycle through real projects only (skip "coming soon" and external ones)
    var cycle = [];
    PROJECTS.forEach(function (q, k) { if (!q.soon && !q.ext) cycle.push(k); });
    var pos = cycle.indexOf(idx);
    var next = PROJECTS[cycle[(pos + 1) % cycle.length]];

    var buttons = "";
    if (p.video) {
      buttons += '<a href="' + esc(p.video) + '" target="_blank" rel="noopener" class="btn btn-coral btn-lg">Watch project video</a> ';
    }
    if (p.link) {
      buttons += '<a href="' + esc(p.link) + '" target="_blank" rel="noopener" class="btn btn-coral btn-lg">Play on itch.io</a> ';
    }
    if (p.ext && p.extLink) {
      buttons += '<a href="' + esc(p.extLink) + '" target="_blank" rel="noopener" class="btn btn-coral btn-lg">' + esc(p.cta || "View profile →") + '</a>';
    }

    return '' +
      '<div class="container-fluid" style="padding:120px 50px 70px;">' +
        '<div class="detail-wrap">' +
          '<a class="back-link" href="#games">← Back to projects</a>' +
          '<h2>' + esc(p.title) + '</h2>' +
          '<div class="tags" style="padding:0;margin:18px 0;">' +
            p.tags.map(function (t) { return '<span class="badge">' + esc(t) + '</span>'; }).join("") +
          '</div>' +
          '<p class="detail-lead">' + esc(p.about) + '</p>' +
          
          (p.videoEmbed
          ? '<h3>Trailer</h3>' +
              '<div class="video-wrap">' +
              '<iframe src="' + esc(p.videoEmbed) + '" title="' + esc(p.title) + ' trailer" ' +
              'loading="lazy" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>' +
              '</div>'
          : '<div class="detail-band" style="background:' + esc(p.band) + ';">' +
              '<span class="glyphicon ' + esc(p.icon) + '"></span>' +
              '</div>') +

          (factsHTML ? '<div class="detail-facts">' + factsHTML + '</div>' : '') +
          (p.myPart ? '<h3>My part</h3><p class="detail-my-part">' + esc(p.myPart) + '</p>' : '') +
          (partsHTML ? '<h3>Details</h3><ul class="detail-parts">' + partsHTML + '</ul>' : '') +
          (buttons ? '<div style="margin:34px 0;">' + buttons + '</div>' : '') +
          '<div style="margin-top:44px;border-top:1px solid var(--line);padding-top:8px;">' +
            '<a class="back-link" href="#games">← Back to projects</a> &nbsp;&nbsp; ' +
            '<a class="back-link" href="#' + esc(next.id) + '">Next: ' + esc(next.title) + ' →</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function setActiveNav(hash) {
    var links = document.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) {
      var isActive = links[i].getAttribute("href") === "#" + hash;
      links[i].parentNode.className = isActive ? "active" : "";
    }
  }

  function route() {
    var hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    var idx = findIndex(hash);

    if (idx > -1) {
      // ---- Show project detail ----
      projectDetail.innerHTML = renderDetail(PROJECTS[idx], idx);
      projectDetail.classList.remove("view-hidden");
      homeContent.classList.add("view-hidden");
      document.title = PROJECTS[idx].title + " · Elena Mora";
      window.scrollTo(0, 0);
      setActiveNav("games");
    } else {
      // ---- Show home ----
      projectDetail.classList.add("view-hidden");
      projectDetail.innerHTML = "";
      homeContent.classList.remove("view-hidden");
      document.title = TITLE;
      setActiveNav(hash);

      var el = hash ? document.getElementById(hash) : null;
      if (el) {
        // Wait one frame so the home view is laid out again before scrolling
        window.requestAnimationFrame(function () {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
    revealOnScroll();
  }

  // Reveal the "slideanim" blocks (also on first paint, not only on scroll)
  function revealOnScroll() {
    var winTop = window.pageYOffset || document.documentElement.scrollTop;
    var els = document.querySelectorAll(".slideanim");
    for (var i = 0; i < els.length; i++) {
      if (els[i].getBoundingClientRect().top + winTop < winTop + 640) {
        els[i].classList.add("slide");
      }
    }
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("scroll", revealOnScroll);

  // Navbar shadow on scroll AND show/hide scroll-to-top button
window.addEventListener("scroll", function () {
  var nav = document.querySelector(".navbar");
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  
  if (nav) {
    if ((window.pageYOffset || document.documentElement.scrollTop) > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }
  
  if (scrollTopBtn) {
    if ((window.pageYOffset || document.documentElement.scrollTop) > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  }
});

// Click to scroll to top
document.getElementById("scrollTopBtn")?.addEventListener("click", function(){
  window.scrollTo({top: 0, behavior: "smooth"});
});

  // Close the collapsed mobile menu after tapping a link
  document.addEventListener("click", function(e){
    if (e.target.closest && e.target.closest(".navbar-nav a")) {
      var menu = document.getElementById("myNavbar");
      if (menu && menu.classList.contains("in") && window.jQuery) {
        window.jQuery(menu).collapse("hide");
      }
    }
  });

  // Run on load
  route();
})();
