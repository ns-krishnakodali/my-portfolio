# My Portfolio

This is my little corner of the internet where you can get to know me, check out what I've been working on, and explore my projects. Developed using **React** and **Vite**, my portfolio website is a showcase of my experience, education, skills, and all the ongoing stuff I've been up to, and it can be viewed at [nskrishnakodali.com](https://www.nskrishnakodali.com).

## Setup

To get started with the project locally:

```sh
git clone https://github.com/ns-krishnakodali/my-portfolio.git
cd my-portfolio
npm install
```

## Environment Variables (Optional)

Refer to the `.env.example` file for required variables. Use `.env.development` for local development and `.env.production` for production environments.

## Build & Run

### Run Locally

```sh
npm run dev
```

### Build for Production

```sh
npm run build
npm run preview
```

## Docker

You can also run the project in a Docker container for local development:

```sh
docker-compose up --build
```

Then visit [http://localhost:5173](http://localhost:5173) to view the website.

---

## Optional Backend Services

To test the following features, you need to clone and run the respective backend services. Setup instructions are available in the respective repositories.

- **Veritas AI** (RAG based personal assistant):
  [https://github.com/ns-krishnakodali/veritas-ai](https://github.com/ns-krishnakodali/veritas-ai)

- **Email Server** (for Contact Me feature):
  [https://github.com/ns-krishnakodali/email-server](https://github.com/ns-krishnakodali/email-server)
