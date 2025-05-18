# CineSphere 🎬

_One Planet. Infinite Stories._

> Curated by us. Streamed for all.

---

#### _Brought to life by the one and only Team Multi Kulti – a symphony of creative minds coding toward clarity, connection, and cultural cohesion._

---

## 🧠 Overview

**CineSphere** is a vibrant single-page streaming interface built with the **MERN-like stack** (React + Tailwind + mock REST API). It celebrates the joy of clean design, fluid routing, and collaborative codecraft.

### 🔧 Features:

- Dynamic routing with React Router
- Tailwind + DaisyUI for responsive, modern design
- Local login system using `json-server`
- LocalStorage for state persistence
- Seamless Vercel deployment 🌐

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/2701kai/CineSphere.git
cd CineSphere
npm install
```

### 2. Start the mock backend

```bash
json-server --watch db.json --port 3000
```

> _(Install json-server globally if needed)_

```bash
npm install -g json-server
```

### 3. Launch frontend

```bash
npm run dev
```

---

## 🔐 Login Credentials

Use this dev login to explore the app:

- **Username:** `tmk`
- **Password:** `go`

You'll be redirected to the movies section after login.

---

## 🧩 Auth Logic

- App checks `http://localhost:3000/users` and stores session data in `localStorage`
- Conditional rendering of navbar login/logout
- Future versions will include route protection (e.g. `/watchlist` gated by login)

---

## 📦 Deployment

Live version hosted on [Vercel](https://vercel.com/).  
Build triggered from the `main` branch using `vite build`.

---

## 🤝 Credits

A true team effort. Special kudos to:

- @2701kai our main fire 🔥
- @payermann for robust routing magic ✨
- @amir.h.a for architectural insights 🧠
- All contributors for navigating the ups and downs with grit, wit, and trust.

---

## 📖 Extended Documentation

🗂️ Explore our full documentation:

- [`HOW_WE_STARTED: Felix initial README.md`](./felix_initial_README.md)
- [`crossPlatform.md`](./doc/cross-platform/crossPlatform.md)
- [`final-fix-gspa-deploy.md`](./doc/gh-issues-kai/final-fix-gspa-deploy.md)
- [`fix-gspa-fork-guide.md`](./doc/gh-issues-kai/fix-gspa-fork-guide.md)

---

## TL;DR 🧃

_CineSphere was born from a storm and forged by collaboration._  
A client request for a streaming upgrade turned into a beautiful showcase of what a motivated, multicultural dev team can achieve in just a week.  
We not only delivered — we grew as devs and humans.

---

## 📚 Read More

Check out the full background story in [`docs/story-of-the-project.md`](./doc/story-of-the-project.md)  
It’s part recap, part satire, all heart.

---

## Like what you see? Be a part of it and prosper with us.

# Join us at [DCI](https://digitalcareerinstitute.org/?dci_friends_promotion_source=survey&dci_friends_promotion_medium=student-satisfaction&dci_friends_promotion_campaign=end-of-course&dci_friends_promotion_content=blank&dci_friends_promotion_term=blank) 🚀!
