# WebLab Hub — Frontend Mini Project Portfolio

**Author:** Leo Shiji  
**Registration Number:** 23MIC0082  
**Academic CGPA:** 7.97 CGPA  
**Program:** Integrated M.Tech (Computer Science & Engineering)  
**Institution:** Vellore Institute of Technology (VIT), Vellore  
**Course:** Web Technologies / Frontend Design & Testing Laboratory  

---

## 🌟 Project Overview

**WebLab Hub** is a unified web application engineered to consolidate **41 Moodle laboratory assignments** into an interactive portal. 

While preserving 100% of the original functional behavior, styling, and scripts of each individual assignment, WebLab Hub elevates the overall presentation with a modern, glassmorphic dark-mode design system, live preview frames, dynamic search, categorized filtering, and viewport device simulation.

---

## 📂 Project Architecture

```
d:\Frontend_Mini_Project/
├── gallery.html        # Primary Showcase Hub (Hero, Filters, Live Grid & Quick Modals)
├── index.html          # All-in-One Continuous Stream (Sticky TOC Sidebar + Inline Previews)
├── site.html           # Dedicated Project Runner & Responsive Viewport Simulator
├── gallery.css         # Glassmorphic Dark-Mode Stylesheet for Showcase Hub
├── index.css           # Stream Feed & Sidebar Table of Contents Stylesheet
├── site.css            # Device Frame & Responsive Runner Stylesheet
├── app.js              # Central Logic: Routing, Filtering, Search, Modals, State
├── README.md           # Complete Project Documentation
└── sites/              # 41 Standalone Assignment Webpages
    ├── 01.html to 41.html
    ├── 24-payment.html & 24-summary.html (Step 2 & 3 for Checkout)
    ├── overview.html, faculty.html, programs.html, research.html, contact.html (Dept. Sub-pages)
    ├── bootstrap/      # Local Bootstrap 5 Distribution
    └── images/         # All Associated Visual Assets (Avatars, Scenery, Badges, Logos)
```

---

## 🚀 Key Functional Capabilities & Upgrades

### 1. Showcase Hub (`gallery.html`)
- **Interactive Hero Stage:** Features a live interactive preview frame allowing visitors to test highlighted assignments (e.g., Traffic Signal, GameZone, Weather Display, ATM Keypad) directly within the hero header.
- **Instant Search:** Debounced real-time query matching across project title, number, category, description, and technology tags. Press `/` from anywhere on the page to focus the search bar immediately.
- **Categorized Filter Pills:** Quick filters for *Foundations & Layouts*, *Site Experiences*, *Forms & Checkout*, *JavaScript Interactions*, and *Bootstrap Sites*, complete with real-time project counts.
- **Multi-Factor Sorting:** Sort by Number (Ascending #01→#41 or Descending #41→#01) and Title (A→Z).
- **In-Page Quick Preview Modal:** Allows users to interact with any assignment in an isolated modal overlay without navigating away from the catalog.
- **Surprise Me (🎲):** Instantly selects and loads a random experiment into the runner.
- **Student Profile Modal:** View author biography, academic credentials, skills, and GitHub links.

### 2. All-in-One Stream (`index.html`)
- **Sticky Table of Contents (TOC) Sidebar:** Real-time searchable list of all 41 projects for smooth one-click jump navigation.
- **Continuous Feed:** View all 41 assignments sequentially in responsive embedded frames.
- **Multi-Step Checkout Flow:** Site #24 includes interactive step switcher tabs to test Customer Details, Payment Details, and Cart Summary.
- **Quick Controls:** Standalone launch buttons and frame refresh capabilities for every project.

### 3. Dedicated Runner & Device Simulator (`site.html`)
- **Responsive Viewport Switcher:** Test any assignment across multiple screen form factors:
  - 🖥️ **Desktop** (100% fluid width)
  - 📱 **Tablet** (768px with simulated bezel)
  - 📱 **Mobile** (375px with simulated smartphone frame)
- **Fluid Navigation:** Previous and Next project buttons with title preview cards and a quick-jump selector dropdown (1 through 41).
- **Direct Standalone Launcher:** Quick button to open the raw assignment file in an independent tab.

---

## 📋 Comprehensive Catalog of 41 Assignments

| # | Project Title | Category | Concepts & Technologies Explored |
|---|---------------|----------|----------------------------------|
| **01** | Local Web Server | Foundations & layouts | Local HTTP environment diagnostics, server status, ping latency |
| **02** | Welcome to VIT | Foundations & layouts | University portal, NIRF ranking, academic programs, motto |
| **03** | Personal Portfolio | Foundations & layouts | Bio, profile photo, technical skills, academic achievements table |
| **04** | Travel Bucket List | Foundations & layouts | Ordered, unordered, and nested list formatting |
| **05** | Science and Technology | Foundations & layouts | Semantic text formatting, citations, abbreviations |
| **06** | Employee Profile | Foundations & layouts | Subscripts, superscripts, chemical formulas, employee metadata |
| **07** | Travel Destinations | Foundations & layouts | Multi-column tourist showcase with responsive photography |
| **08** | Employee ID Card | Foundations & layouts | Fixed-dimension employee badge with barcode & photo styling |
| **09** | Computer Science Department | Foundations & layouts | Multi-page department portal (Overview, Faculty, Programs, Contact) |
| **10** | Website Layout | Foundations & layouts | Classical table-based structural layout with header, menu, and content |
| **11** | Employee Management System | Foundations & layouts | Dashboard UI with sidebar navigation (Directory, Payroll, Leave) |
| **12** | Div Layout | Foundations & layouts | CSS Box Model structural container boundaries |
| **13** | Hospital Header | Foundations & layouts | Medical header with branch selector, emergency hotline, search |
| **14** | CityCare Hospital | Foundations & layouts | Full healthcare portal with services, departments, and footer |
| **15** | Smart Search Engine | Site experiences | Instant query search with Academic, Code, and Campus categories |
| **16** | GameZone | Site experiences | Neon cyberpunk gaming portal with cards, ratings, and genre filter |
| **17** | Company Profile | Site experiences | Apex Digital Solutions corporate landing page |
| **18** | Library Management System | Site experiences | Digital catalog dashboard with borrowing stats and book imagery |
| **19** | Hospital Footer | Site experiences | Multi-column medical footer with emergency hotline & compliance |
| **20** | Employee Registration | Forms & checkout | HTML5 form validation, onboarding media, pattern attributes |
| **21** | Student Login | Forms & checkout | Student authentication portal with audio briefing & remember me |
| **22** | Registration Form | Forms & checkout | National Technical Symposium portal with event pass selections |
| **23** | Patient Registration | Forms & checkout | Clinical admission form for medical history, symptoms, emergency contacts |
| **24** | Checkout and Payment | Forms & checkout | 3-Step e-commerce flow: Customer Details → Payment → Summary |
| **25** | Employee Form with JavaScript | Forms & checkout | Client-side registration with live dynamic summary table rendering |
| **26** | Login Validation | Forms & checkout | Real-time JS credential validation with dynamic error states |
| **27** | Student Registration | Forms & checkout | Comprehensive regex field validation (Name, Email, Phone, Gender) |
| **28** | Course Registration | Forms & checkout | Interactive course selection with prerequisite and credit checks |
| **29** | Mouse Events | JavaScript interactions | DOM event triggers: mouseenter, mouseleave, click, dblclick |
| **30** | Interactive Product Card | JavaScript interactions | Swatch color changer, quantity stepper, dynamic price calculation |
| **31** | Traffic Signal | JavaScript interactions | Interactive traffic light with STOP/READY/GO modes & cycle timer |
| **32** | Weather Status | JavaScript interactions | Animated weather dashboard switching Sunny, Rainy, and Stormy states |
| **33** | Welcome Button | JavaScript interactions | Personalized greeting generator with time-of-day detection |
| **34** | Student Search | JavaScript interactions | Real-time regex table filtering by Name, Reg No, and Department |
| **35** | ATM PIN Entry | JavaScript interactions | ATM keypad simulation with PIN masking, balance check, and withdrawal |
| **36** | Product Search | JavaScript interactions | Live catalog search with category filters and price sorting |
| **37** | Online Exam | JavaScript interactions | Timed MCQ examination engine with countdown and instant evaluation |
| **38** | Campus Image Viewer | JavaScript interactions | Thumbnail strip with enlarged preview switching |
| **39** | Travel Photo Gallery | JavaScript interactions | Responsive travel photo flex grid and destination gallery |
| **40** | College Events 2026 | Bootstrap sites | Bootstrap-powered Gravitas 2026 event schedule & hackathon register |
| **41** | User Authentication | Forms & checkout | Gravitas 2026 dual Login & Registration portal built with Bootstrap |

---

## 💻 How to Run the Website

1. **Direct Browser Execution:**
   - Simply double-click `gallery.html` or `index.html` in Windows File Explorer to open in Google Chrome, Microsoft Edge, or any modern web browser.
2. **Local HTTP Server (Recommended for iframe security & instant performance):**
   - Open a terminal in `d:\Frontend_Mini_Project` and execute:
     ```bash
     python -m http.server 8080
     ```
   - Then navigate to `http://localhost:8080/gallery.html` in your browser.

