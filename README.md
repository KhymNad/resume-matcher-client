# 💼 Resume Matcher – Frontend (React)

This is the frontend of **Resume Matcher**, a full-stack AI-powered application that parses resumes, extracts key information using NLP, and finds real-time job listings tailored to the candidate's skills and experience.

Built with **React**, **Framer Motion**, and **React Router**, this responsive UI connects to a .NET + Python backend and showcases job matches from sources like Adzuna, Indeed, and LinkedIn.

---

##  Features

-  **Resume Upload**  
  Upload a resume (PDF) directly from your device for AI-powered parsing and analysis.

-  **Region Selection**  
  Choose the target region for job matching to narrow down relevant listings.

-  **AI Matching & Extraction**  
  Connects to backend APIs to extract job titles, experience, education, and skills using NLP (Hugging Face).

-  **Job Matching Sidebar**  
  Automatically matches skills to jobs using ESCO + embedding search and displays results in a toggleable sidebar.

-  **Resume Preview**  
  Preview the uploaded resume file from the UI without needing to reupload.

-  **Dynamic Routing**  
  Navigate between homepage and product info without losing uploaded data using React Context.

-  **Framer Motion UI**  
  Subtle and professional animations using Framer Motion for smooth transitions.

---

##  Folder Structure
```bash
resume-matcher-frontend/
├── public/
│ └── logo.png
├── src/
│ ├── assets/
│ ├── components/
│ ├── context/
│ │ ├── HomeContext.jsx
│ │ └── HomeProvider.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── Product.jsx
│ ├── services/
│ │ └── resume-matcher-api.js
│ ├── App.jsx
│ ├── index.js
│ └── styles/
│ └── *.module.css
```

---

##  Tech Stack

- **React** (Frontend Library)
- **Framer Motion** (Animation)
- **React Hot Toast** (Notifications)
- **React Router v6** (Routing)
- **Context API** (State Persistence)
- **CSS Modules** (Scoped Styling)

---

##  Backend Integration

This app connects to a full-stack backend:

- **.NET 6 Web API** for core business logic
- **Python Flask microservice** for high-accuracy resume text parsing
- **Supabase PostgreSQL** for skills & job data
- **Adzuna API** for real-time job listings
- **Hugging Face** for Named Entity Recognition (NER)

For the backend repo and deployment guide, see:  
 [ResumeMatcherAPI GitHub Repo](#https://github.com/KhymNad/resume-matcher-api)

---

##  Getting Started

```bash
npm install
npm run dev
```

##  Dependencies
React

React Router

Framer Motion

React Hot Toast

Classnames

Axios

Vite (Dev Server)

##  Future Improvements
User authentication + resume history

Save favorite jobs or apply directly from UI

Skill confidence scoring visualization

Mobile optimizations

Dark mode
