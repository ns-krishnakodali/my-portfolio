# KK Portfolio

This is my little corner of the internet where you can get to know me, check out what I've been working on, and explore my projects. Developed using **React** and **Vite**, it's a showcase of my experience, education, skills and all the ongoing stuff I've been up to.

## Setup

To get started with the project locally:

```sh
git clone https://github.com/ns-krishnakodali/my-portfolio.git
cd my-portfolio
npm install
```

## Environment Variables (Optional)

You only need to configure environment variables if you plan to set up the following related applications:

- [Veritas AI](https://github.com/ns-krishnakodali/veritas-ai)
- [Email Server](https://github.com/ns-krishnakodali/email-server)

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

1. Build and start the container:

   ```sh
   docker-compose up --build
   ```

2. Visit [http://localhost:5173](http://localhost:5173) to view the app.
