> **Quick Start:**  
> - [Download as ZIP](https://github.com/your-username/movie-recommendation-platform/archive/refs/heads/main.zip)  
> - [Use as GitHub Template](https://github.com/your-username/movie-recommendation-platform/generate)

# Movie Recommendation Platform

## Overview

A fullstack app for searching, reviewing, and recommending movies, built with React, Express, and MongoDB.

---

## Setup & Deployment

### 1. Clone

```bash
git clone https://github.com/your-username/movie-recommendation-platform.git
cd movie-recommendation-platform
```

---

### 2. Backend

**Local:**

```bash
cd backend
cp .env.example .env
# Edit MONGO_URL, JWT_SECRET, TMDB_API_KEY
npm install
npm run dev
```

**Docker:**

```bash
docker build -t movie-backend .
docker run -p 4000:4000 --env-file .env movie-backend
```

**Cloud:**
- Push to GitHub.
- Deploy to Render/Heroku.
- Set environment variables for Mongo, JWT, TMDB API key.

---

### 3. Frontend

**Local:**

```bash
cd frontend
cp .env.example .env
npm install
npm start
```

**Docker:**

```bash
docker build -t movie-frontend .
docker run -p 80:80 --env-file .env movie-frontend
```

**Cloud:**
- Push to GitHub.
- Deploy to Netlify/Vercel.
- Set `REACT_APP_API_URL` in dashboard to your backend URL.

---

### 4. CI/CD

- GitHub Actions run lint/build on push for both frontend and backend.
- Edit `.github/workflows/ci.yml` as needed.

---

### 5. Styling

- Edit `frontend/src/index.css` for branding.
- Use any UI library (MUI, Chakra, Tailwind) for advanced design.

---

## Connecting Frontend & Backend

- The frontend reads `REACT_APP_API_URL` as the API base.
- Backend must be CORS-enabled for the frontend’s domain.
- For deployment, ensure frontend’s API URL points to deployed backend, not localhost.

---

## Troubleshooting

- Check backend logs (Heroku/Render dashboard) for DB or API errors.
- Ensure TMDB API key is valid and not rate-limited.
- Use browser dev tools to debug API requests.

---

## Project Structure

- `/backend` — Express API, MongoDB, JWT, TMDB integration
- `/frontend` — React app, API calls, auth, UI

---

**Happy coding!**