// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.curateddesignaiken.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.curateddesignaiken.com/","title_tag":"Interior Design Aiken & Tailored Interiors | Curated Design","meta_description":"Curated Design Aiken offers tailored interiors, interior decorating and home renovations in Aiken, SC. Schedule a free design consultation for timeless style."},{"page_url":"https://www.curateddesignaiken.com/about-4","title_tag":"Tailored Interiors & Timeless Style Aiken | Curated Design","meta_description":"Learn how Curated Design Aiken crafts tailored interiors with a personalized approach. Collaborative interior design from consultation to installation."},{"page_url":"https://www.curateddesignaiken.com/portfolio","title_tag":"Timeless Style Aiken Interior Design Portfolio | Curated","meta_description":"Explore Curated Design Aiken portfolio, featuring timeless style, quiet luxury and effortlessly elegant interiors tailored to each home."},{"page_url":"https://www.curateddesignaiken.com/projects-1","title_tag":"Find Your Interior Design Style Aiken | Curated Design","meta_description":"Discover your interior design style with Curated Design Aiken. Explore traditional, minimalist, transitional and farmhouse looks tailored to you."},{"page_url":"https://www.curateddesignaiken.com/news-1","title_tag":"Aiken Interior Services & Design Consultation | Curated","meta_description":"Explore Aiken interior services from Curated Design Aiken: design consultation, interior decorating, renovations, space planning and more."},{"page_url":"https://www.curateddesignaiken.com/booking-calendar/free-consultation","title_tag":"Design Consultation Aiken Free Session | Curated Design","meta_description":"Book a free design consultation with Curated Design Aiken. Start your interior design journey with a personalized approach to your home."},{"page_url":"https://www.curateddesignaiken.com/booking-calendar/interior-decorating","title_tag":"Interior Decorating Aiken Booking | Curated Design","meta_description":"Schedule interior decorating with Curated Design Aiken. Revitalize your home with curated furnishings, decor and timeless style."},{"page_url":"https://www.curateddesignaiken.com/booking-calendar/renovations-design","title_tag":"Home Renovations Aiken Design | Curated Design","meta_description":"Book home renovations and design with Curated Design Aiken. Tailored interiors and creative design solutions to reimagine your living spaces."},{"page_url":"https://www.curateddesignaiken.com/projects/urban-loft","title_tag":"Timeless Style Aiken Inspired Interiors | Curated Design","meta_description":"View Timeless Interiors by Curated Design Aiken. Light-filled, tailored spaces with timeless Southern charm and sophisticated, cozy design."}],"keywords":["Curated Design Aiken","Interior Design Aiken","Tailored Interiors Aiken","Home Renovations Aiken","Interior Decorating Aiken","Timeless Style Aiken","Design Consultation Aiken","Personalized Approach Aiken","Creative Design Aiken","Aiken Interior Services"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.curateddesignaiken.com/#localbusiness",
  "url": "https://www.curateddesignaiken.com/",
  "name": "Curated Design",
  "description": "Curated Design is an interior design firm in Aiken, SC offering personalized interior decorating, renovations & design, and complimentary in-home consultations to create tailored interiors with timeless style.",
  "image": [
    "https://static.wixstatic.com/media/20e45d_08e9b5aeaa214c43af7f5a4678bcab35%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/20e45d_08e9b5aeaa214c43af7f5a4678bcab35%7Emv2.png"
  ],
  "logo": "https://static.wixstatic.com/media/20e45d_08e9b5aeaa214c43af7f5a4678bcab35%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/20e45d_08e9b5aeaa214c43af7f5a4678bcab35%7Emv2.png",
  "telephone": "+1-706-825-3404",
  "email": "kimnagy@curateddesignaiken.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Aiken",
    "addressRegion": "SC",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Aiken"
  },
  "founder": {
    "@type": "Person",
    "name": "Kim Nagy",
    "jobTitle": "Owner & Lead Designer"
  },
  "sameAs": [
    "https://www.facebook.com/",
    "https://www.instagram.com/"
  ],
  "serviceArea": {
    "@type": "City",
    "name": "Aiken"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Free In-home Consultation",
        "description": "A complimentary in-home consultation designed to address your unique challenges, spark fresh ideas and introduce Curated Design's personalized approach."
      },
      {
        "@type": "Offer",
        "name": "Showroom Design Meetings",
        "description": "Designer guidance at flooring showrooms, tile or paint stores and beyond to help you make confident design decisions."
      },
      {
        "@type": "Offer",
        "name": "Virtual Design Plans",
        "description": "Curated furniture and fixture selections delivered in a convenient virtual format so you can implement at your own pace."
      },
      {
        "@type": "Offer",
        "name": "Interior Decorating and Styling",
        "description": "Interior decorating to elevate your home with refined furnishings, layered textures and curated accents for a timeless, magazine-worthy look."
      },
      {
        "@type": "Offer",
        "name": "Kitchen and Bath Design",
        "description": "Design of kitchens and baths, including cabinetry, backsplashes, fixtures and lighting to balance beauty and function."
      },
      {
        "@type": "Offer",
        "name": "Window Treatments and Soft Goods",
        "description": "Custom window treatments and soft goods designed as the essential finishing touch to perfectly complement your space."
      },
      {
        "@type": "Offer",
        "name": "Space Planning and Design",
        "description": "Space planning services to solve layout challenges and maximize your home's potential, from furniture placement to room reconfiguration."
      },
      {
        "@type": "Offer",
        "name": "New-build Selections",
        "description": "Guidance through new-build selections including paint, flooring, lighting, cabinetry, tile and fixtures for a cohesive, timeless design."
      },
      {
        "@type": "Offer",
        "name": "Renovations and Additions",
        "description": "Design services for renovations and additions, bringing a designer's eye to every detail for a seamless and beautifully executed result."
      }
    ]
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Free Consultation",
      "description": "Begin your design journey with a complimentary consultation.",
      "url": "https://www.curateddesignaiken.com/booking-calendar/free-consultation"
    },
    {
      "@type": "Offer",
      "name": "Interior Decorating",
      "description": "Revitalize your home with updated paint, furnishings, decor and more.",
      "url": "https://www.curateddesignaiken.com/booking-calendar/interior-decorating"
    },
    {
      "@type": "Offer",
      "name": "Renovations & Design",
      "description": "Tailored design solutions to reimagine your living spaces.",
      "url": "https://www.curateddesignaiken.com/booking-calendar/renovations-design"
    }
  ],
  "urlTemplate": "https://www.curateddesignaiken.com/{service}",
  "knowsAbout": [
    "Interior design",
    "Interior decorating",
    "Space planning",
    "Kitchen design",
    "Bathroom design",
    "Window treatments",
    "Home renovations",
    "New-build selections",
    "Traditional style",
    "Minimalist style",
    "Transitional style",
    "Farmhouse style"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
