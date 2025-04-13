# Plan for Elite Barbershop Website

## 1. Project Goal
Create a modern, responsive, SEO-friendly website for "Elite Barbershop for Men" using HTML5, CSS3, JavaScript, and Bootstrap, featuring multiple pages, language switching (AR/EN), and an elegant design.

## 2. Technology Stack
*   **Frontend:** HTML5, CSS3, JavaScript (ES6+)
*   **CSS Framework:** Bootstrap 5 (for responsiveness and pre-built components)
*   **Maps:** Google Maps API (will require an API key)
*   **Image Gallery:** Bootstrap Carousel or a dedicated JS library (e.g., Lightbox2)
*   **Language Switching:** JavaScript with JSON files for locale strings.

## 3. Proposed Directory Structure
```
/elite-barber/
├── index.html
├── about.html
├── services.html
├── packages.html
├── gallery.html
├── contact.html
├── blog.html
├── faq.html
├── css/
│   ├── bootstrap.min.css  (Downloaded or CDN)
│   └── style.css          (Custom styles)
├── js/
│   ├── bootstrap.bundle.min.js (Downloaded or CDN)
│   ├── locales.js         (Language switching logic)
│   ├── map.js             (Google Maps integration)
│   └── script.js          (General custom scripts, form validation, gallery)
├── images/
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── gallery/
│   │   └── ... (gallery images)
│   └── ... (other site images)
├── locales/
│   ├── ar.json            (Arabic text content)
│   └── en.json            (English text content - *to be provided/translated*)
└── sitemap.xml            (For SEO)
```

## 4. Development Steps (in ACT MODE)
1.  **Setup:** Create the main project directory (`elite-barber`) and subdirectories (`css`, `js`, `images`, `locales`).
2.  **HTML Structure:** Create HTML files for each page (`index.html`, `about.html`, etc.) with basic structure and semantic HTML5 tags. Link Bootstrap CSS/JS.
3.  **Content Integration (Arabic):** Populate HTML files with the provided Arabic content. Structure content logically using Bootstrap grid and components.
4.  **Styling:** Develop custom CSS (`style.css`) to implement the desired design (black, gold, dark grey theme), override Bootstrap defaults where needed, and ensure visual consistency.
5.  **Header & Footer:** Create reusable header (with navigation) and footer sections.
6.  **JavaScript:**
    *   Implement navigation menu interactions.
    *   Set up the image gallery on `gallery.html`.
    *   Add client-side validation to the contact form on `contact.html`.
    *   Integrate Google Maps on `contact.html`.
    *   Implement the language switching mechanism using `locales.js` and JSON files.
7.  **Responsiveness:** Test and refine responsiveness across different screen sizes using Bootstrap classes and custom media queries if necessary.
8.  **SEO:** Add appropriate meta tags (title, description) to each page based on the provided content. Generate `sitemap.xml`.
9.  **Testing:** Test website functionality, cross-browser compatibility, and performance.

## 5. Language Switching Approach
*   Create `locales/ar.json` and `locales/en.json`. `ar.json` will contain the provided Arabic text, structured with keys. `en.json` will need corresponding English translations.
*   Use JavaScript (`locales.js`) to detect the selected language (e.g., via a button click or browser preference).
*   Add `data-translate="key_name"` attributes to HTML elements that need translation.
*   The script will fetch the appropriate JSON file and update the `textContent` or `innerHTML` of elements based on their `data-translate` attribute.

## 6. Content Outline (Provided Arabic Content)

*(The extensive Arabic content provided by the user will be structured and included here for reference during development. Due to length limitations, it's summarized here but will be fully included in the actual file.)*

*   **Homepage:** Title, Meta Desc, Slogan, Welcome, Why Us, Services Summary, Reviews, Contact.
*   **About Us:** Title, Meta Desc, Story, Vision, Mission, Values, Team, Environment.
*   **Services:** Title, Meta Desc, Hair (Cut, Style, Treatment), Beard (Trim, Treatment), Skin (Cleanse, Masks, Waxing), Prices.
*   **Packages & Prices:** Title, Meta Desc, Individual Prices Table, Packages (Basic, Silver, Gold, Diamond), Special Packages (Groom, VIP, Father & Son), Discounts.
*   **Gallery:** Title, Meta Desc, Sections for Haircuts, Beard, Skin Care, Salon Interior.
*   **Contact Us:** Title, Meta Desc, Contact Info, Form, Map, Social Media.
*   **Blog:** Title, Meta Desc, Suggested Article Titles.
*   **FAQ:** Title, Meta Desc, Q&A about hours, booking, services, policies, payment, discounts.

---
*End of PLAN.md content*
