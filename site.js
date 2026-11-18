/* No build step: this file is served as-is.
   - English copy lives in index.html (the source of truth, readable without JS).
   - French copy lives in FR below, keyed by the data-i18n attribute.
   - bin/check fails when the two drift apart. */
(function () {
  "use strict";

  /* ================= i18n ================= */
  var FR = {
    "skip": "Aller au contenu",
    "nav.results": "Réalisations",
    "nav.oss": "Open source",
    "cta.short": "Prendre RDV",
    "cta.book": "Réserver un appel de 30 min",
    "cta.contributions": "Voir mes contributions",
    "cta.linkedin": "M’écrire sur LinkedIn",
    "log.title": "Sélection de pull requests fusionnées",
    "log.foot": '<b data-stat="prs">171</b> pull requests fusionnées dans <b data-stat="repos">25</b> dépôts qui ne sont pas les miens. <a id="verify-link" href="https://github.com/search?q=is%3Apr+author%3Anavidemad+is%3Amerged+is%3Apublic+-user%3Anavidemad+-user%3Ayespark+-user%3APixel-CLI&amp;type=pullrequests">Vérifier sur GitHub</a>',
    "results.r1.what": "Requête sur les paiements",
    "results.r1.how": "Un index composite sur une table de paiements de 5,6 Go, mesuré à l’EXPLAIN ANALYZE en prod.",
    "results.r2.what": "Liste de factures",
    "results.r2.before": "~100 requêtes",
    "results.r2.after": "2 requêtes",
    "results.r2.how": "Un N+1 ActiveStorage, éliminé par préchargement.",
    "results.r3.what": "Endpoints admin et API, p95",
    "results.r3.how": "Index partiels, agrégats en cache, OR de sous-requêtes réécrits en plans BitmapOr indexés (estimation prudente).",
    "oss.title": "Open source",
    "help.title": "Comment je peux vous aider",
    "results.r1.gain": "<b>52 000×</b> plus rapide",
    "results.r2.gain": "<b>50×</b> moins de requêtes",
    "results.r3.gain": "<b>2 à 5×</b> plus rapide",
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
    "results.title": "Réalisations",
    "work.b1": "<h3>Diagnostic d’une requête de paiement lente</h3><p>Une investigation menée avec Datadog a permis trois améliorations en production.</p>",
    "work.b2": "<h3>Fiabilité de la production</h3><p>Suivi des incidents jusqu’au bout, surveillance des tâches planifiées, des alertes qui ne sonnent que pour de vraies pannes.</p>",
    "work.b3": "<h3>CI/CD et DevOps</h3><p>Pipelines plus rapides, déploiements plus sûrs, environnements de staging, gestion des secrets.</p>",
    "work.b5": "<h3>Migrations et intégrations</h3><p>Des plateformes historiques ramenées sur un seul backend sans casser la production ; paiement, matériel d’accès et caméras ANPR.</p>",
    "work.b6": "<h3>Revue et mentorat</h3><p>Revue de code quotidienne, mentorat structuré des développeurs juniors, vie privée et sécurité par défaut.</p>",
    "oss.maintainer": "Mainteneur",
    "oss.px.role": "Co-auteur. Donne aux agents de code IA la partie déterministe du travail sur un dépôt",
    "oss.cap.role": "Auteur. Les tests système Rails, sur Lightpanda",
    "meta.title": "Navid Emad - Ingénieur IA agentique & Lead Developer Rails",
    "hero.title": "Des agents IA et des systèmes Rails qui tiennent en production.",
    "hero.intro": "Je suis Navid Emad, lead developer chez Yespark. Je contribue à <strong>Ruby on Rails</strong>, à la <strong>bibliothèque Ruby de Datadog</strong> et à <strong>Lightpanda</strong>.",
    "hero.availability": "Disponible en freelance · Paris ou à distance",
    "results.sub": "Des optimisations en production chez Yespark et des outils que je développe pour les équipes techniques.",
    "oss.sub": "Une sélection de pull requests et les projets que je maintiens ou auxquels je contribue.",
    "oss.lp.role": "Navigateur headless conçu pour les agents IA et l’automatisation, en Zig",
    "oss.agents.role": "Des outils sur lesquels tournent les agents de code IA : support d’un nouveau langage dans chacun",
    "help.sub": "J’interviens en freelance en parallèle de mon poste de lead chez Yespark.",
    "contact.desc": "Client avec une roadmap ou porteur de projet avec une idée, quelques lignes suffisent. Je réponds sous 24 h, avec franchise : ce que je peux faire et comment je m’y prendrais. Si je ne suis pas la bonne personne, je vous le dirai et vous aiguillerai si je peux.",
    "log.updated": "Mis à jour le",
    "featured.title": "Mes contributions intégrées",
    "featured.rails": "Correction du workflow CI généré pour les applications en mode API.",
    "featured.datadog": "Correction d’un crash du profileur mémoire sous Ruby 4.",
    "featured.lightpanda": "Prise en charge du suivi de progression des envois dans le navigateur headless.",
    "service.1.name": "Automatiser une tâche d’équipe",
    "service.1.desc": "Partons d’une tâche récurrente. Je relie un agent à vos outils et prévois une étape de validation.",
    "service.2.name": "Accélérer une application Rails",
    "service.2.desc": "J’analyse une requête lente, je corrige le point de blocage et je mesure le gain en production.",
    "service.3.name": "Construire un produit ensemble",
    "service.3.desc": "Vous apportez le problème à résoudre. Nous définissons une première version et la développons ensemble.",
    "service.4.name": "Renforcer votre équipe avec un lead à temps partiel",
    "service.4.desc": "J’accompagne votre équipe dans ses choix d’architecture, ses revues de code et la progression de ses développeurs.",
    "ai.title": "Préparer une revue de code avec Pixel",
    "ai.prompt": "« Que risque-t-on de casser en modifiant cette méthode ? »",
    "ai.example": "J’ai co-développé Pixel pour donner à un agent de code le contexte nécessaire pour répondre. Avant sa réponse, Pixel retrouve les appels à la méthode, les tests et les changements récents dans un index local. Le développeur peut examiner les fichiers et les lignes concernés avant de décider quoi modifier.",
    "ai.link": "Voir comment Pixel prépare le contexte",
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
