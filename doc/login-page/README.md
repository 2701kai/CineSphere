# CineSphere 🎬

One Planet. Infinite Stories.

> Curated by us. Streamed for all.

---

#### _Props to the phenomenal @team-multi-kulti for navigating the entire journey — from the ephemeral bliss of .jsx heaven to the yawning abyss of profound crisis — without ever succumbing, thanks to the spirit that defines us as a team._

---

## 🧠 Overview

CineSphere is a streaming interface prototype built with the **MERN-like stack** (React + mock REST API).  
It features:

- Dynamic routing with React Router
- Responsive UI with Tailwind / DaisyUI
- Login authentication using `json-server`
- LocalStorage-based auth simulation
- Deployed on Vercel 🌐

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourname/cinesphere.git
cd cinesphere
npm install
```

### 2. Start the mock backend

```bash
json-server --watch db.json --port 3000
```

> Note: You'll need to install `json-server` if you haven’t already:

```bash
npm install -g json-server
```

### 3. Start the frontend

```bash
npm run dev
```

---

## 🔐 Login Credentials

Use this to sign in:

- **Username:** `tmk`
- **Password:** `go`

You’ll be redirected to the movies page on success.

---

## 🧩 Auth Logic

Login uses a simple localStorage check:

- On login, the app queries `http://localhost:3000/users` and stores the user in `localStorage`.
- Navbar shows “Logout” if a user is logged in.
- Future versions will protect routes like `/watchlist`.

---

## 📦 Deployment

Live version is deployed via **[Vercel](https://vercel.com/)**.  
CI/CD builds from `main` and runs `vite build`.

---

## 🤝 Credits

### _Props to the phenomenal @team-multi-kulti for navigating the entire journey - from the ephemeral bliss of .jsx heaven to the yawning abyss of profound crisis - without ever succumbing, thanks to the spirit that defines us as a team._

---

## 🧪 Upcoming Features

v

- Route protection (redirect to `/login` if not signed in)
- Express + MongoDB backend
- JWT auth
- Search and filtering logic
