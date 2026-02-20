
<a name="readme-top"></a>

# Frontend Contribution Guide

Welcome! Thank you for contributing to open response. This guide will help you set up the project locally, run it via Docker, follow coding standards, and submit pull requests.


## Getting Started

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) (v18+ recommended)  
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)  
- [Git](https://git-scm.com/)  
- [Docker](https://www.docker.com/) (optional if using Docker)  

Clone the repository:

```bash
git clone https://github.com/okotdaniel/open-response.git
cd frontend
```

## Project Structure

```bash 
frontend/
├── public/         # Static assets
├── src/
│   ├── components/ # Reusable UI components
│   ├── pages/      # Next.js pages
│   ├── styles/     # CSS / Tailwind files
│   └── utils/      # Utility functions
├── .env.example    # Example environment variables
├── package.json
└── next.config.js
```

## Local Development

Install dependencies:

```bash 
npm install
```
or
```bash 
yarn install 
```


### 2. Create an .env.local file based on .env.example:
cp .env.example .env.local

### 3. Start the development server:
```bash 
npm run dev
````
or
```bash
yarn dev
```

Open http://localhost:3000 to view the app.

# Dockerized Setup

### 1. Build the Docker image:
```bash
docker build -t frontend-app . 
```
### 2. Run the Docker container:
```bash
docker run -p 3000:3000 --env-file .env.local frontend-app
```

```bash
⚠️ Note: Make sure your backend is running if the frontend depends on it.
```
## Coding Guidelines
Follow Next.js and React best practices.
Use TypeScript if enabled in the project.
Use Prettier for formatting:
1. Coding Guidelines
2. Follow Next.js and React best practices.
3. Use TypeScript if enabled in the project.
4. Use Prettier for formatting:
## Submitting a Pull Request
### 1.Fork the repo and create a branch:
```bash
git checkout -b feature/your-feature-name
```
### 2. Make your changes and commit:
```bash 
git add .
git commit -m "Add your commit message here"
```
### 3. Push to your fork:
```bash
git push origin feature/your-feature-name
```
### 4. Open a pull request on GitHub.    
Provide a clear description of your changes and link any relevant issues.
# Reporting an issue
If you encounter bugs or have ideas for improvements:
1. Check the [issue tracker](https://github.com/okotdaniel/open-response/issues) to see if the issue has already been reported.
2. If not, create a new issue with a clear description and steps to reproduce the problem.  
Thank you for contributing to open response! Your efforts help make this project better for everyone.