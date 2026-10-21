# EMS — Employee Management System

A clean, role-based task management app for teams. Admins assign and track work; employees accept, complete, or flag their tasks — all in a fast, animated React interface.

**🔗 Live Demo:** [https://bhaviksems.vercel.app/](https://bhaviksems.vercel.app/)
**📦 Repository:** [https://github.com/BhavikSharma2010/ems](https://github.com/BhavikSharma2010/ems)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

### Admin

- **Create Task** — assign tasks to any employee with a title, description, date, and category
- **All Tasks** — view every task across the team with color-coded status labels
- **Manage Employees** — browse the team directory with per-employee task stats

### Employee

- **Personal dashboard** — summary cards for new, active, completed, and failed tasks
- **Task board** — accept new tasks, mark them completed, or flag them as failed
- **Status tracking** — every task moves through New → Active → Completed / Failed

### General

- Landing page with hero and product highlights
- Built-in **demo access modal** — copy credentials and log in with one click
- Session persistence — refresh the page and stay logged in
- Smooth, animated UI built with Motion

## 🔑 Demo Credentials

| Role     | Email                 | Password |
| -------- | --------------------- | -------- |
| Admin    | `admin@example.com`   | `123`    |
| Employee | `e@e.com`             | `123`    |

Additional seeded employees: `employee2@example.com` through `employee5@example.com` (password `123`).

## 🛠 Tech Stack

| Technology    | Purpose                        |
| ------------- | ------------------------------ |
| React 19      | UI framework                   |
| Vite 7        | Build tool & dev server        |
| Tailwind CSS 3 | Styling                       |
| Motion        | Animations                     |
| Lucide React  | Icons                          |

The app runs fully client-side — user and task data are seeded into and persisted in the browser's `localStorage`. No backend or database required.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/BhavikSharma2010/ems.git

# Move into the project folder
cd ems

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

### Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with HMR        |
| `npm run build`   | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint across the project        |

## 📁 Project Structure

```
src/
├── components/
│   ├── Auth/          # Login page
│   ├── Dashboard/     # Admin & Employee dashboards
│   ├── Landing/       # Landing page & demo credentials modal
│   └── TaskList/      # Task cards (accept / complete / fail)
├── context/           # Auth context + provider (task state management)
├── other/             # Admin views: create task, all tasks, manage employees
├── utils/             # localStorage seeding & helpers
├── App.jsx            # Routing between landing, login, and dashboards
└── main.jsx           # Entry point
```

## ☁️ Deployment

The app is deployed on **Vercel**: [https://bhaviksems.vercel.app/](https://bhaviksems.vercel.app/)

To deploy your own instance:

1. Push the repo to GitHub
2. Import it on [Vercel](https://vercel.com/new)
3. Vercel auto-detects Vite — no extra configuration needed

Or build locally and host the `dist/` folder on any static host:

```bash
npm run build
```

## 📄 Repository

Source code: [github.com/BhavikSharma2010/ems](https://github.com/BhavikSharma2010/ems)
