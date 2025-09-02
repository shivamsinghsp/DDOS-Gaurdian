DDoS Guardian — Frontend (Traffic Pattern Based DDoS Detection)




🚀 DDoS Guardian is a project aimed at detecting and preventing DDoS attacks using supervised learning.
👉 Currently, only the frontend is complete and deployed on Vercel. The backend with ML models and APIs will be added in the next phase.

✨ Features (Frontend)

Responsive UI built with React + Tailwind CSS

Pages for Traffic Pattern Visualization

Mock/Static data integration for demo purposes

Deployed and live on Vercel

🧱 Tech Stack

Frontend: React, Tailwind CSS

Deployment: Vercel

Backend (Planned): Node/Express or Spring Boot (not yet implemented)

ML Models (Planned): Random Forest, SVM, Decision Tree

🔗 Live Demo

Frontend: https://ddos-gaurdian.vercel.app/

📦 Project Structure (Current)
ddos-gaurdian/
├─ frontend/                  # React app (deployed on Vercel)
│  ├─ public/
│  ├─ src/
│  │  ├─ components/          # UI components (charts, cards, layouts)
│  │  ├─ pages/               # React pages
│  │  └─ styles/              # Tailwind / CSS
│  ├─ package.json
│  └─ README.md
└─ backend/                   # (Work in progress - ML + API service)

🚀 Running Locally (Frontend)
# clone the repo
git clone https://github.com/<your-username>/ddos-gaurdian.git
cd ddos-gaurdian/frontend

# install dependencies
npm install

# run in development
npm run dev

# open http://localhost:3000

🛠 Planned Work (Next Phase)

Backend APIs → Feature extraction, ML-based detection, and prevention actions

Model Integration → Random Forest, SVM, Decision Tree on labeled datasets

Real-Time Traffic Support → API for streaming and classification

Firewall/IPS Hooks → Integration for mitigation actions

📄 License

MIT — free to use and modify.
