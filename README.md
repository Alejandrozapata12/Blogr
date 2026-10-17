# Modern Landing Page (Blogr / Product Showcase)

A fully responsive, modern landing page built with **React**, **Vite**, and customized CSS. This application showcases clean component architecture, smooth navigation, interactive UI components, and optimized asset handling.

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Git Commit & Push Guide](#git-commit--push-guide)
- [License](#license)

---

## 🧐 Overview

This project is a high-performance, mobile-first responsive landing page UI. It features multi-level navigation, hero branding sections, feature showcases, infrastructure breakdowns, and a "scroll to top" utility component. 

---

## ✨ Key Features

- 📱 **Mobile-First Responsive Design**: Optimized layout across desktop, tablet, and mobile breakpoints.
- ⚡ **Powered by Vite & React**: Fast HMR (Hot Module Replacement) and optimized production bundles.
- 🧩 **Modular Architecture**: Cleanly separated React components (`Header`, `NavBar`, `Main`, `Infrastructure`, `Complement`, `Others`, `Footer`, `Up`).
- 🎨 **Organized Styling**: Modular CSS stylesheets per component for scalable style management.
- 🔝 **Scroll To Top Control**: Smooth scrolling utility component (`Up.jsx`) for seamless UX.

---

## 🛠️ Tech Stack

- **Frontend Library:** React
- **Build Tool:** Vite
- **Styling:** CSS3 (Flexbox, CSS Grid, Custom Media Queries)
- **Code Quality:** ESLint
- **Package Manager:** npm / yarn

---

## 📁 Project Structure

```text
.
├── public/
│   └── favicon.png
├── src/
│   ├── assets/                # SVGs, illustrations, icons, and background patterns
│   │   ├── bg-pattern-circles.svg
│   │   ├── bg-pattern-intro-desktop.svg
│   │   ├── bg-pattern-intro-mobile.svg
│   │   ├── icon-arrow-dark.svg
│   │   ├── icon-arrow-light.svg
│   │   ├── icon-close.svg
│   │   ├── icon-hamburger.svg
│   │   ├── illustration-editor-desktop.svg
│   │   ├── illustration-editor-mobile.svg
│   │   ├── illustration-laptop-desktop.svg
│   │   ├── illustration-laptop-mobile.svg
│   │   ├── illustration-phones.svg
│   │   └── logo.svg
│   ├── components/            # Reusable UI components
│   │   ├── Complement.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Infrastructure.jsx
│   │   ├── Main.jsx
│   │   ├── NavBar.jsx
│   │   ├── Others.jsx
│   │   └── Up.jsx
│   ├── css/                   # Stylesheets for individual components
│   │   ├── Complement.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── Infrastructure.css
│   │   ├── Main.css
│   │   ├── NavBar.css
│   │   ├── Other.css
│   │   └── ScrollToTop.css
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js