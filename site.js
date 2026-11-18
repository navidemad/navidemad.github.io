/* No build step: this file is served as-is.
   - English copy lives in index.html (the source of truth, readable without JS).
   - French copy lives in FR below, keyed by the data-i18n attribute.
   - bin/check fails when the two drift apart. */
(function () {
  "use strict";

  var USER = "navidemad";
  var FIRST_YEAR = 2014;
  // Third-party work only: my own repos, my employer's and the Pixel org I co-run are excluded.
  var QUERY = "is:pr author:" + USER + " is:merged -user:" + USER + " -user:yespark -user:Pixel-CLI";
  var LOG_SIZE = 6;
  var PER_REPO = 2; // rows per repository in the hero log
  var CACHE_KEY = "gh-pulls-v3";
  var CACHE_TTL = 60 * 60 * 1000;
  var MAX_PAGES = 5; // 500 PRs; beyond that the per-repo counts keep their baked-in values

  /* ================= i18n ================= */
  var FR = {
    "meta.title": "Navid Emad - Lead Developer Rails & ingénieur IA agentique",
    skip: "Aller au contenu",
    "nav.results": "Résultats",
    "nav.oss": "Open source",
    "nav.contact": "Travailler ensemble",
    "cta.short": "Réserver un appel",
    "cta.book": "Réserver un appel de 30 min",
    "cta.results": "Voir les résultats mesurés",
    "cta.linkedin": "M’écrire sur LinkedIn",
    "hero.title": "Des systèmes Rails et des agents IA qui tiennent en production.",
    "hero.availability": "Ouvert à quelques missions freelance. Paris ou remote, réponse sous 24 h.",
    "log.title": "Fusionnées dans les projets les plus étoilés",
    "log.snapshot": "instantané, nov. 2026",
    "log.live": "en direct de GitHub",
    "log.foot":
      '<b data-stat="prs">171</b> pull requests fusionnées dans <b data-stat="repos">25</b> dépôts qui ne sont pas les miens. <a href="https://github.com/search?q=is%3Apr+author%3Anavidemad+is%3Amerged+-user%3Anavidemad+-user%3Ayespark+-user%3APixel-CLI&amp;type=pullrequests">Vérifier sur GitHub</a>',
    "results.title": "Une appli lente en production, mesurée avant et après",
    "results.r1.what": "Pire requête en production",
    "results.r1.how":
      "Un index composite sur une table de paiements de 5,6 Go, mesuré à l’EXPLAIN ANALYZE en prod.",
    "results.r2.what": "Liste de factures",
    "results.r2.before": "~100 requêtes",
    "results.r2.after": "2 requêtes",
    "results.r2.how": "Un N+1 ActiveStorage, éliminé par préchargement.",
    "results.r3.what": "Endpoints admin et API, p95",
    "results.r3.how":
      "Index partiels, agrégats en cache, OR de sous-requêtes réécrits en plans BitmapOr indexés (estimation prudente).",
    "oss.title": "Où le code a atterri",
    "oss.px.role": "Co-auteur et premier contributeur, CLI en Rust",
    "oss.cap.role": "Auteur et mainteneur, gem Ruby",
    "help.title": "Comment je peux aider",
    "help.sub": "Je prends quelques missions freelance en parallèle de mon poste de lead.",
    "contact.desc":
      "Quelques lignes suffisent. Je réponds sous 24 h, avec franchise : ce que je peux faire et comment je m’y prendrais. Si je ne suis pas la bonne personne, je vous le dirai et vous aiguillerai si je peux.",
    "upstream.label": "Mon code est fusionné upstream dans",
    "results.r1.gain": "<b>52 000×</b> plus rapide",
    "results.r2.gain": "<b>50×</b> moins de requêtes",
    "results.r3.gain": "<b>2 à 5×</b> plus rapide",
    "oss.lp.role": "Moteur de navigateur headless en Zig",
    "contact.title": "Dites-moi ce que vous construisez.",
    "how.b1": "Des PRs petites, argumentées, benchmarkées",
    "how.b2": "Je dis non à l’IA non rentable",
    "how.b3": "Franc dès le premier appel",
    "hero.intro":
      "Moi c’est Navid, <strong>lead developer chez Yespark</strong>. <strong><span data-years>12</span> ans</strong> à construire des <strong>applis Rails critiques</strong>, et aujourd’hui à brancher des <strong>agents IA</strong> sur de vrais workflows. Toujours du code au quotidien.",
    "oss.px.desc":
      "Donne aux agents de code IA la partie déterministe du travail sur un dépôt, pour qu’ils gardent leurs tokens pour la partie difficile.",
    "oss.cap.desc": "Les tests système Rails, sur Lightpanda.",
    "oss.rails.role": "Correctifs de générateurs et de pipeline de build",
    "oss.dd.role": "Deux correctifs de crash en production, fusionnés upstream",
    "oss.cl.role": "La plateforme française de vaccination COVID-19, en bénévole",
    "oss.also.title": "La longue traîne",
    "oss.all":
      'Les <span data-stat="prs">171</span> pull requests fusionnées, dans <span data-stat="repos">25</span> dépôts',
    "results.sub":
      "Chez Yespark, location de parkings partout en France, j’ai mené une campagne requêtes et index pilotée par Datadog sur les chemins les plus lents en production. Le reste du métier est juste à côté.",
    "work.b1":
      "<h3>Fiabilité et CI/CD</h3><p>Suivi des incidents jusqu’au bout, surveillance des tâches planifiées, des alertes qui ne sonnent que pour de vraies pannes. Pipelines plus rapides, déploiements plus sûrs.</p>",
    "work.b2":
      "<h3>Outillage IA pour l’équipe</h3><p>Skills Claude Code, tri et revue automatisés, agents branchés sur les outils internes.</p>",
    "work.b3":
      "<h3>Migrations, intégrations, mentorat</h3><p>Des plateformes historiques ramenées sur un seul backend sans casser la production ; paiement et matériel d’accès ; revue quotidienne et mentorat des développeurs juniors.</p>",
    "oss.sub":
      "Jugé par des reviewers Rails, des ingénieurs Datadog et des mainteneurs de moteurs de navigateur, pas par une page portfolio. Chaque ligne ouvre la preuve.",
    "oss.lp.count": '<b data-count="lightpanda-io/browser">97</b> PRs fusionnées',
    "oss.cl.count": '<b data-count="hostolab/covidliste">43</b> PRs fusionnées',
    "help.b1":
      "<h3>Performance et architecture Rails</h3><p>Audits, optimisation de requêtes, pipelines de jobs.</p>",
    "help.b2":
      "<h3>Agents IA en production</h3><p>De l’audit des cas d’usage aux agents branchés sur vos outils.</p>",
    "help.b3": "<h3>Lead fractionné</h3><p>Direction technique, culture de revue, mentorat.</p>",
  };

  // English strings that are not in the initial markup.
  var EN = { "meta.title": document.title, "log.live": "live from GitHub" };
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    EN[el.getAttribute("data-i18n")] = el.innerHTML;
  });
  var DICTS = { en: EN, fr: FR };

  function storage(action, key, value) {
    try {
      if (action === "get") return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) {
      /* private mode or blocked storage: the page works without it */
    }
    return null;
  }

  function initialLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (DICTS[fromUrl]) return fromUrl;
    var saved = storage("get", "lang");
    if (DICTS[saved]) return saved;
    return /^fr\b/i.test(navigator.language || "") ? "fr" : "en";
  }

  var lang = initialLang();
  var live = null; // { total, repos, counts, log } once GitHub answered

  function t(key) {
    var value = DICTS[lang][key];
    return value == null ? EN[key] : value;
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t(el.getAttribute("data-i18n"));
      if (value != null && el.innerHTML !== value) el.innerHTML = value;
    });
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === lang));
    });
    renderNumbers();
  }

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      var next = button.getAttribute("data-lang");
      if (next === lang) return;
      lang = next;
      storage("set", "lang", lang);
      applyLang();
    });
  });

  /* ================= numbers and dates ================= */
  // Translations re-inject the baked-in figures, so this runs after every language switch.
  function renderNumbers() {
    var years = new Date().getFullYear() - FIRST_YEAR;
    document.querySelectorAll("[data-years]").forEach(function (el) {
      el.textContent = years;
    });
    var month = new Intl.DateTimeFormat(lang, { month: "short", year: "numeric", timeZone: "UTC" });
    document.querySelectorAll("#log-list time").forEach(function (el) {
      el.textContent = month.format(new Date(el.dateTime));
    });
    if (live && live.stars) {
      document.querySelectorAll("[data-repo]").forEach(function (el) {
        var count = live.stars[el.getAttribute("data-repo")];
        if (count != null) el.setAttribute("data-stars", count);
      });
    }
    var compact = new Intl.NumberFormat(lang, { notation: "compact", maximumFractionDigits: 1 });
    document.querySelectorAll("[data-stars]").forEach(function (el) {
      var count = Number(el.getAttribute("data-stars"));
      el.textContent = compact.format(count);
      el.title = new Intl.NumberFormat(lang).format(count) + (lang === "fr" ? " étoiles sur GitHub" : " GitHub stars");
    });
    if (!live) return;
    document.querySelectorAll('[data-stat="prs"]').forEach(function (el) {
      el.textContent = live.total;
    });
    if (!live.counts) return;
    document.querySelectorAll('[data-stat="repos"]').forEach(function (el) {
      el.textContent = live.repos;
    });
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var count = live.counts[el.getAttribute("data-count")];
      if (count) el.textContent = count;
    });
  }

  /* ================= live GitHub data ================= */
  function fetchPage(page) {
    var url =
      "https://api.github.com/search/issues?q=" +
      encodeURIComponent(QUERY) +
      "&sort=created&order=desc&per_page=100&page=" +
      page;
    return fetch(url, { headers: { Accept: "application/vnd.github+json" } }).then(function (res) {
      if (!res.ok) throw new Error("GitHub API " + res.status);
      return res.json();
    });
  }

  function fetchPulls() {
    var items = [];
    function next(page) {
      return fetchPage(page).then(function (data) {
        items = items.concat(data.items || []);
        var done = items.length >= data.total_count || !(data.items || []).length;
        if (!done && page < MAX_PAGES) return next(page + 1);
        return summarize(data.total_count, items);
      });
    }
    return next(1);
  }

  function summarize(total, items) {
    var pulls = items.map(function (item) {
      return {
        repo: item.repository_url.replace(/^.*\/repos\//, ""),
        title: item.title,
        url: item.html_url,
        merged: (item.pull_request && item.pull_request.merged_at) || item.closed_at,
      };
    });
    var summary = { total: total, pulls: pulls };
    // Per-repo figures are only true when every PR was fetched.
    if (pulls.length >= total) {
      summary.counts = {};
      pulls.forEach(function (pull) {
        summary.counts[pull.repo] = (summary.counts[pull.repo] || 0) + 1;
      });
      summary.repos = Object.keys(summary.counts).length;
    }
    return summary;
  }

  // One request for every repository's star count (the core API would need one each).
  function fetchStars(repos) {
    var q = repos
      .map(function (repo) {
        return "repo:" + repo;
      })
      .join(" ");
    var url = "https://api.github.com/search/repositories?per_page=100&q=" + encodeURIComponent(q);
    return fetch(url, { headers: { Accept: "application/vnd.github+json" } })
      .then(function (res) {
        if (!res.ok) throw new Error("GitHub API " + res.status);
        return res.json();
      })
      .then(function (data) {
        var stars = {};
        (data.items || []).forEach(function (repo) {
          stars[repo.full_name.toLowerCase()] = repo.stargazers_count;
        });
        return stars;
      });
  }

  // The hero log: most-starred projects first, at most PER_REPO pull requests each,
  // so one very active repository cannot fill the whole list.
  function pickLog(pulls, stars) {
    var byRepo = {};
    pulls
      .slice()
      .sort(function (a, b) {
        return a.merged < b.merged ? 1 : -1;
      })
      .forEach(function (pull) {
        var list = (byRepo[pull.repo] = byRepo[pull.repo] || []);
        if (list.length < PER_REPO) list.push(pull);
      });
    function starsOf(repo) {
      return (stars && stars[repo.toLowerCase()]) || 0;
    }
    return Object.keys(byRepo)
      .sort(function (a, b) {
        // without star counts (API refused), fall back to the most recent work
        return starsOf(b) - starsOf(a) || (byRepo[a][0].merged < byRepo[b][0].merged ? 1 : -1);
      })
      .reduce(function (rows, repo) {
        return rows.concat(
          byRepo[repo].map(function (pull) {
            return { repo: pull.repo, title: pull.title, url: pull.url, merged: pull.merged, stars: starsOf(repo) };
          }),
        );
      }, [])
      .slice(0, LOG_SIZE);
  }

  function fetchSummary() {
    return fetchPulls().then(function (summary) {
      var repos = summary.pulls
        .map(function (pull) {
          return pull.repo;
        })
        .filter(function (repo, i, all) {
          return all.indexOf(repo) === i;
        });
      // project rows also show stars for repositories outside the PR search (my own)
      var shown = [].map.call(document.querySelectorAll("[data-repo]"), function (el) {
        return el.getAttribute("data-repo");
      });
      shown.forEach(function (repo) {
        if (repos.indexOf(repo) < 0) repos.push(repo);
      });
      return fetchStars(repos)
        .catch(function () {
          return null;
        })
        .then(function (stars) {
          summary.stars = {};
          shown.forEach(function (repo) {
            if (stars && stars[repo.toLowerCase()] != null) summary.stars[repo] = stars[repo.toLowerCase()];
          });
          summary.log = pickLog(summary.pulls, stars);
          delete summary.pulls; // keep the cached payload small
          return summary;
        });
    });
  }

  function cachedPulls() {
    try {
      var cached = JSON.parse(storage("get", CACHE_KEY));
      if (cached && Date.now() - cached.at < CACHE_TTL) return cached.summary;
    } catch (e) {
      /* corrupt cache: refetch */
    }
    return null;
  }

  function renderLog(latest) {
    var list = document.getElementById("log-list");
    var shown = [].map.call(list.querySelectorAll("a"), function (a) {
      return a.href;
    });
    var incoming = latest.map(function (pull) {
      return pull.url;
    });
    if (shown.join() === incoming.join()) return;

    list.replaceChildren.apply(
      list,
      latest.map(function (pull) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = pull.url;
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("aria-hidden", "true");
        var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
        use.setAttribute("href", "#merged");
        svg.appendChild(use);
        var title = document.createElement("span");
        title.className = "title";
        title.textContent = pull.title;
        var time = document.createElement("time");
        time.dateTime = pull.merged.slice(0, 10);
        var repo = document.createElement("span");
        repo.className = "repo";
        repo.textContent = pull.repo;
        a.append(svg, title, time, repo);
        if (pull.stars) {
          var stars = document.createElement("span");
          stars.className = "stars";
          stars.setAttribute("data-stars", pull.stars);
          a.append(stars);
        }
        li.appendChild(a);
        return li;
      }),
    );
  }

  function showLive(summary) {
    live = summary;
    renderLog(summary.log);
    document.getElementById("log-source").setAttribute("data-i18n", "log.live");
    applyLang();
  }

  /* ================= pointer glow ================= */
  // The hero and each card light up under the pointer (CSS reads --mx / --my).
  if (matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".hero, [data-glow]").forEach(function (el) {
      el.addEventListener("pointermove", function (event) {
        var box = el.getBoundingClientRect();
        el.style.setProperty("--mx", event.clientX - box.left + "px");
        el.style.setProperty("--my", event.clientY - box.top + "px");
      });
    });
  }

  applyLang(); // paint the right language immediately, hydrate live numbers after

  var cached = cachedPulls();
  if (cached) {
    showLive(cached);
  } else {
    fetchSummary()
      .then(function (summary) {
        storage("set", CACHE_KEY, JSON.stringify({ at: Date.now(), summary: summary }));
        showLive(summary);
      })
      .catch(function () {
        /* rate-limited or offline: the baked-in snapshot stays, labelled as such */
      });
  }
})();
