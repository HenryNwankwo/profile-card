# Profile Card

A simple, accessible, and responsive **Profile Card** built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript**.  
This project is part of the **Frontend Wizards Stage 0 challenge**.

---

## Task Overview

The goal was to create a small, testable profile card using **only HTML, CSS, and JavaScript**, ensuring every visible element has a `data-testid` attribute for automated testing.

## Features

- Semantic HTML structure (`<article>`, `<header>`, `<nav>`, `<section>`, etc.)
- Fully responsive layout (mobile → tablet → desktop)
- Accessible (focus styles, alt text, proper headings)
- Time updates dynamically using `Date.now()`
- Social links open safely in new tabs (`target="_blank"` + `rel="noopener noreferrer"`)

---

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Flexbox + responsive design
- **JavaScript (ES6)** — For time updates

---

## How to Run Locally

1. **Clone this repository**

   ```bash
   git clone https://github.com/HenryNwankwo/profile-card.git

   ```

2. **Navigate into the project directory:**

   ```bash
   cd profile-card

   ```

3. **Open the project:**

   ```bash
   Double-click index.html
   ```

## New Pages (Stage 1)

### Contact Us

- Includes form validation for name, email, subject, and message.
- Displays errors under each field and a success message on valid submission.

### About Me

- Reflective page with bio, goals, low confidence areas, and notes to future self.
- Built with semantic HTML and accessible structure.

---

## Live Demo

Visit the deployed version here:  
[https://henrynwankwo.github.io/profile-card/](https://henrynwankwo.github.io/profile-card/)

## Navigation

Added navigation links at the top of each page:

```html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About Me</a>
  <a href="contact.html">Contact</a>
</nav>


```
