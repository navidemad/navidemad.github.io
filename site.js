/* No build step: this file is served as-is.
   - English copy lives in index.html (the source of truth, readable without JS).
   - French copy lives in FR below, keyed by the data-i18n attribute.
   - bin/check fails when the two drift apart. */
(function () {
  "use strict";

  /* ================= i18n ================= */
  var FR = {
    "skip": "Aller au contenu",
    "nav.oss": "Open source",
    "cta.short": "Prendre RDV",
    "cta.book": "Réserver un appel de 30 min",
    "cta.contributions": "Voir mes contributions",
    "cta.linkedin": "M’écrire sur LinkedIn",
    "log.title": "Sélection de pull requests fusionnées",
    "log.foot": '<b data-stat="prs">171</b> pull requests fusionnées dans <b data-stat="repos">25</b> dépôts qui ne sont pas les miens. <a id="verify-link" href="https://github.com/search?q=is%3Apr+author%3Anavidemad+is%3Amerged+is%3Apublic+-user%3Anavidemad+-user%3Ayespark+-user%3APixel-CLI&amp;type=pullrequests">Vérifier sur GitHub</a>',
    "oss.title": "Open source",
    "help.title": "Comment je peux vous aider",
    "contact.title": "Dites-moi ce que vous construisez.",
    "how.b1": "Des PRs petites, argumentées, benchmarkées",
    "how.b2": "Je dis non à l’IA non rentable",
    "how.b3": "Franc dès le premier appel",
    "oss.rails.role": "Correctifs de générateurs et de pipeline de build",
    "oss.dd.role": "Deux correctifs de crash en production, fusionnés upstream",
    "oss.cl.role": "La plateforme française de vaccination COVID-19, en bénévole",
    "oss.also.title": "La longue traîne",
    "oss.all": '<span data-stat="tail-prs">22</span> autres pull requests fusionnées, dans <span data-stat="tail-repos">16</span> autres dépôts',
    "oss.lp.count": '<b data-count="lightpanda-io/browser">97</b> PRs fusionnées',
    "oss.cl.count": '<b data-count="hostolab/covidliste">43</b> PRs fusionnées',
    "oss.maintainer": "Mainteneur",
    "oss.px.role": "J’ai co-développé Pixel pour que les agents de code retrouvent les appels à une méthode et ses tests, avec les fichiers et les lignes correspondants.",
    "oss.cap.role": "Auteur. Les tests système Rails, sur Lightpanda",
    "meta.title": "Navid Emad - Staff Engineer, plateforme IA & Rails",
    "hero.title": "Agents IA et systèmes web qui tiennent en production.",
    "hero.intro": '<span>Staff Engineer chez <span class="org"><img src="logos/yespark.svg" width="22" height="22" alt="" />Yespark</span>, responsable de la plateforme Rails et de l’outillage IA de l’équipe.</span><span>Mainteneur et contributeur open source.</span>',
    "hero.availability": "Disponible en freelance · Paris ou à distance",
    "oss.sub": "Une sélection de pull requests et les projets que je maintiens ou auxquels je contribue.",
    "oss.lp.role": "Navigateur headless conçu pour les agents IA et l’automatisation, en Zig",
    "oss.agents.role": "Des outils sur lesquels tournent les agents de code IA : support d’un nouveau langage dans chacun",
    "help.sub": "J’interviens en freelance en parallèle de mon poste de lead chez Yespark.",
    "contact.desc": "Client avec une roadmap ou porteur de projet avec une idée, quelques lignes suffisent. Je réponds sous 24 h, avec franchise : ce que je peux faire et comment je m’y prendrais. Si je ne suis pas la bonne personne, je vous le dirai et vous aiguillerai si je peux.",
    "log.updated": "Mis à jour le",
    "service.1.name": "Des agents IA qui font le vrai travail",
    "service.1.desc": "Je branche un agent sur les outils que votre équipe utilise déjà, avec une validation humaine avant qu’il agisse et une vue claire du coût de chaque exécution.",
    "service.1.chip.1": "Claude et MCP",
    "service.1.chip.2": "Automatisation GitHub",
    "service.1.chip.3": "Validation humaine",
    "service.1.lead": "Pixel",
    "service.1.example": "Le <a href=\"#ai-workflow\">graphe de code open source</a> que j’ai co-développé pour que les agents vérifient ce qu’une modification casse avant de l’écrire.",
    "service.2.name": "Performance et fiabilité Rails",
    "service.2.desc": "Je trace les requêtes lentes, réduis le SQL qu’elles déclenchent, accélère la CI et rends les déploiements sans histoire. Après un incident, je corrige la cause et ajoute l’alerte qui l’aurait détecté.",
    "service.2.chip.1": "Requêtes et index",
    "service.2.chip.2": "CI plus rapide",
    "service.2.chip.3": "Traces et alertes",
    "service.2.lead": "100 → 2",
    "service.2.example": "Requêtes SQL pour afficher une liste de factures chez Yespark : d’une centaine à deux.",
    "service.3.name": "Développement produit et intégrations",
    "service.3.desc": "Une première version cadrée et livrée avec les fondateurs, ou la partie difficile d’un produit existant : une migration d’ancien système, un nouveau prestataire de paiement, l’équipement qui ouvre une barrière de parking.",
    "service.3.chip.1": "Première version",
    "service.3.chip.2": "Migrations",
    "service.3.chip.3": "Paiement et matériel",
    "service.3.lead": "43 PRs",
    "service.3.example": "Fusionnées sur Covidliste, la plateforme française de vaccination COVID-19, en bénévole.",
    "service.4.name": "Staff engineer à temps partiel",
    "service.4.desc": "Architecture et standards décidés par écrit, outillage dev et IA que l’équipe adopte pour de bon, revue de code et mentorat. Je travaille en binôme avec votre engineering manager et lui laisse le management.",
    "service.4.chip.1": "Décisions écrites",
    "service.4.chip.2": "Outillage dev et IA",
    "service.4.chip.3": "Mentorat",
    "service.4.lead": "8 devs",
    "service.4.example": "Utilisent seuls l’outillage IA chez Yespark : 49 skills partagés, et un agent relit chaque pull request en premier.",
    "nav.services": "Services",
    "tag.0": "agents de code IA",
    "tag.1": "recherche dans le code",
    "tag.2": "formulaires",
    "tag.3": "Ruby on Rails dans RTK",
    "tag.4": "Zig dans GitNexus",
    "tag.5": "optimisation des tokens",
    "tag.6": "analyse de code",
    "tag.7": "tests système",
    "tag.8": "profilage",
    "tag.9": "traçage distribué",
    "tag.10": "pages de présentation",
    "tag.11": "e-mails",
    "tag.12": "recherche dans la FAQ",
    "exp.dev": "ans de développement",
    "exp.yespark": "ans sur la même plateforme",
    "scale.label": "La plateforme dont je dirige le développement, en production",
    "scale.subscribers.n": "55 000",
    "scale.subscribers": "abonnés",
    "scale.requests.n": "66 M",
    "scale.requests": "requêtes par mois",
    "scale.jobs.n": "80 M",
    "scale.jobs": "jobs asynchrones par mois",
    "scale.prs.n": "50+",
    "scale.prs": "pull requests fusionnées par jour",
  };

  // English strings that are not in the initial markup.
  var EN = { "meta.title": document.title };
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
    if (fromUrl === "en" || fromUrl === "fr") return fromUrl;
    var saved = storage("get", "lang");
    if (saved === "en" || saved === "fr") return saved;
    return /^fr\b/i.test(navigator.language || "") ? "fr" : "en";
  }

  var lang = initialLang();
  // Translated sentences contain counters. Restore them from the published snapshot.
  var counts = new Map();
  function counterKey(el) {
    return el.getAttribute("data-count") || el.getAttribute("data-stat");
  }
  document.querySelectorAll("[data-count], [data-stat]").forEach(function (el) {
    counts.set(counterKey(el), el.textContent);
  });

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
      var url = new URL(location.href);
      url.searchParams.set("lang", next);
      history.replaceState(history.state, "", url);
      if (next === lang) return;
      lang = next;
      storage("set", "lang", lang);
      applyLang();
    });
  });

  /* ================= numbers and dates ================= */
  // Translations re-inject the baked-in figures, so this runs after every language switch.
  function renderNumbers() {
    document.querySelectorAll("[data-count], [data-stat]").forEach(function (el) {
      el.textContent = counts.get(counterKey(el));
    });
    // Experience counts whole years elapsed, so it stays right without editing the page.
    var now = new Date();
    document.querySelectorAll("[data-since]").forEach(function (el) {
      var since = new Date(el.getAttribute("data-since"));
      var years = now.getUTCFullYear() - since.getUTCFullYear();
      var before = now.getUTCMonth() < since.getUTCMonth() || (now.getUTCMonth() === since.getUTCMonth() && now.getUTCDate() < since.getUTCDate());
      el.textContent = years - (before ? 1 : 0);
    });
    var date = document.getElementById("snapshot-date");
    date.textContent = new Intl.DateTimeFormat(lang, { dateStyle: "medium", timeZone: "UTC" }).format(new Date(date.dateTime));
    var month = new Intl.DateTimeFormat(lang, { month: "short", year: "numeric", timeZone: "UTC" });
    document.querySelectorAll("#log-list time").forEach(function (el) {
      el.textContent = month.format(new Date(el.dateTime));
    });
    var compact = new Intl.NumberFormat(lang, { notation: "compact", maximumFractionDigits: 1 });
    document.querySelectorAll("[data-stars]").forEach(function (el) {
      var count = Number(el.getAttribute("data-stars"));
      el.textContent = compact.format(count);
      el.title = new Intl.NumberFormat(lang).format(count) + (lang === "fr" ? " étoiles sur GitHub" : " GitHub stars");
    });
  }

  applyLang();
})();
