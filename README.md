# Slash

Level up your skills with Slash, the tool that simplifies DSA problem-solving.

[![Project Screenshot](/images/1.png)](https://slash-landing.riddhesh.dev/)

## Live preview

[Open Live Preview](https://slash-landing.riddhesh.dev/)

## Test credentials

You can use following login credentials to login to the app.

```
Username: admin@gmail.com
Password: admin@gmail.com
```

## Technologies Used

- **Next.js**: A React framework that enables functionality like server-side rendering and generating static websites.
- **Tailwind CSS**: A utility-first CSS framework for building modern and responsive user interfaces.
- **Docker**: A tool designed to make it easier to create, deploy, and run applications by using containers.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Prisma**: A database toolkit for Typescript and Node.js that makes it easy to access and manipulate databases.
- **TurboRepo**: A tool that enables you to create and manage microservices with ease. [Learn More](https://turbo.build/repo)

## Getting Started

To get started with the project, follow these steps (Please install turbo before proceeding, refer https://turbo.build/repo/docs/installing):

1. **Clone the repository:**

   ```bash
   git clone https://github.com/riddhesh-mahajan/slash.git
   ```

2. **Install dependencies:**

   ```bash
   cd slash
   yarn
   ```

3. **Add database url**
   Create .env file inside packages/database. Add database url as following

   ```
   DATABASE_URL=postgresql://postgres:yourpassword@localhost:5434/slash?schema=public
   ```

4. **Run development server:**
   ```
   turbo dev
   ```

## Available Scripts

- **`turbo dev`**: Starts the development server.
- **`turbo build`**: Builds the application for production.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as you see fit.
