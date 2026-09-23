# Zarvea Natural Spices — Luxury B2B Export Web Application

A modern, high-performance static web application built for **Zarvea Natural Spices**, positioned as a luxury B2B spice exporter from South India. The platform showcases premium spice collections, origin terroirs, B2B export capabilities, and an interactive trade knowledge hub.

---

## Key Features

* **Luxury Brand Identity & Theme**: Tailored color palette featuring Midnight Green (`#032219`), Forest Emerald, and Metallic Gold accents (`#E6CA65`), complete with glassmorphism UI elements, gold gradients, and metallic foil typography.
* **Master Product Catalog**: Comprehensive showcase of 11 premium spice products with detailed specifications and high-resolution visuals.
* **Interactive Terroir Sourcing Tabs**: Real-time JavaScript tab system highlighting spice origins across key South Indian growing regions (*Wayanad, Idukki, Palakkad, Lakshadweep*).
* **Dedicated B2B Trade Knowledge Hub (`faqs.html`)**:
  * Standalone page designed specifically for international B2B trade inquiries.
  * Real-time live search filter for instant answers.
  * Categorized FAQ navigation (*Trade & Export, Quality, Shipping, Custom Branding*).
  * Expand/Collapse All controls for enhanced readability.
  * Integrated Google `FAQPage` JSON-LD Structured Data for technical SEO.
* **Smart Navigation & Quick Actions**:
  * Scroll-spy sticky header that smoothly locks to the top of the viewport upon scrolling.
  * Floating WhatsApp action button with ambient pulse animation and desktop tooltip.
  * Direct PDF Brochure download action button.
* **Fully Responsive & Optimized**: Clean, semantic HTML5, utility-first styling with Tailwind CSS, and lightweight Vanilla JavaScript.

---

## Directory Structure

```text
Zarvea - Fayiz Kalathighal/
├── index.html                   # Primary landing page (Hero, About, Terroir, Catalog, B2B Teaser, Contact)
├── faqs.html                    # Standalone B2B Trade FAQ Knowledge Hub page
├── assets/                      # Brand photography, product images, hero backgrounds, and PDF brochure
├── scripts/
│   └── main.js                  # Core interactive logic (Navbar scroll-spy, Terroir tabs, FAQ search, Mobile menu)
├── styles/
│   └── main.css                 # Custom styles, gold gradients, glassmorphism, animations, and Tailwind imports
├── README.md                    # Project documentation
└── Zarvea_Website_Project_Handover.docx # Billing & project handover documentation
```

---

## Local Development Setup

Because this is a lightweight static web application with no heavy server build step required, you can launch it using any local web server:

### Option 1: Python HTTP Server
```bash
# Run from the project root directory
python3 -m http.server 8088
```
Open your browser and navigate to: [http://localhost:8088](http://localhost:8088)

### Option 2: VS Code Live Server
Open the directory in VS Code and click **"Go Live"** from the status bar or right-click `index.html` -> **Open with Live Server**.

---

## Deployment Guidelines

This static site is optimized for zero-cost, high-speed edge hosting:

* **Vercel / Netlify / Cloudflare Pages**: Connect your Git repository (GitHub/GitLab) and select the root directory. No build command or output directory configuration is needed.
* **Custom Domain & SSL**: Automatic free SSL certificate (HTTPS) provisioning via host settings.

---

## Technology Stack

* **Structure**: HTML5 (Semantic & Accessible)
* **Styling**: Vanilla CSS3 + Tailwind CSS
* **Scripting**: Vanilla JavaScript (ES6+, No Framework Overhead)
* **SEO**: OpenGraph Meta Tags & JSON-LD Structured Data (`FAQPage`)
* **Typography**: Google Fonts (*Playfair Display* & *Outfit*)

---

## License & Credits

© **Zarvea Natural Spices**. All rights reserved. Designed & developed for B2B export marketing.
