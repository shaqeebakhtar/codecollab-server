![Logo](./images/codecollab-logo.png)

# CodeCollab Backend

Welcome to the CodeCollab backend repository! This is the backend server for the CodeCollab project, which is built using Socket.IO, Node.js, Express, and TypeScript. In this document, you will find detailed information about the backend server and how to contribute to this repository.

Please note that the frontend and backend repositories are separate. If you're looking for the **frontend repository**, you can find it [here](https://github.com/shaqeebakhtar/codecollab).

## Table of Contents

- [Project Overview](#project-overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation and running locally](#installation-and-running-locally)
- [Roadmap](#roadmap)
- [Contribution Guidelines](#contribution-guidelines)
  - [Creating an Issue](#creating-an-issue)
  - [Working on an Issue](#working-on-an-issue)
  - [Commit Guidelines](#commit-guidelines)
  - [Pull Requests](#pull-requests)
- [Contact](#contact)

## Project Overview

CodeCollab is a collaborative code editor where developers can work together in real-time. It provides features like collaborative editing, syntax highlighting. The frontend of the project is built using ReactJS, Tailwind CSS, TypeScript, and Redux.

## Screenshots

![App Screenshot](./images/codecollab-login.png)

![App Screenshot](./images/codecollab-editor.png)

## Features

- **Real-time collaboration:** Multiple developers can work together on the same code in real-time.
- **Syntax highlighting:** The code editor supports syntax highlighting for various programming languages.

## Technologies Used

The frontend of the CodeCollab project is built using the following technologies:

- NodeJS
- Express
- TypeScript
- Socket.IO

## Getting Started

To get started with the CodeCollab backend server, follow the instructions below.

### Installation and running locally

1. Clone the project:

   ```bash
   git clone https://github.com/shaqeebakhtar/codecollab-server.git
   ```

2. Go to the project directory:

   ```bash
   cd codecollab-server
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start development server:

   ```bash
   npm run dev
   ```

This will start the backend server, and it will be accessible at [http://localhost:5000](http://localhost:5000).

## Roadmap

- Additional programming language support

- Run code and show output

- Add cursor highlighting

## Contribution Guidelines

We welcome contributions from the community to make the CodeCollab backend server better. If you would like to contribute, please follow the guidelines below.

### Creating an Issue

If you have found a bug, have a feature request, or want to suggest an improvement, you can create an issue on the GitHub repository. Please provide a clear and detailed description of the issue or suggestion.

### Working on an Issue

If you want to work on an existing issue, please follow these steps:

1. Comment on the issue that you want to work on it, to let others know that you're working on it.
2. Fork the repository to your own GitHub account.
3. Create a new branch for your contribution:

   ```bash
   git checkout -b my-contribution
   ```

4. Make your changes and commit them with appropriate messages following the [commit guidelines](#commit-guidelines).
5. Push your changes to your forked repository:

   ```bash
   git push origin my-contribution
   ```

6. Create a pull request from your forked repository to the main repository's `main` branch.

### Pull Requests

To submit your changes for review, create a pull request with the following information:

- Provide a clear and descriptive title for your pull request.
- Include a summary of the changes you have made.
- Reference any related issues using the GitHub issue number.

## Commit Guidelines

I want you to follow the [Conventional Commit Types](https://github.com/pvdlg/conventional-commit-types) guidelines for commit messages. This helps to maintain a consistent commit history and makes it easier to understand the changes made in each commit.

Please use the following format for your commit messages:

```
<type>: <description>
```

Example commit messages:

```
feat: Add user authentication endpoints

chore: Update dependencies

docs: Update README with contribution guidelines

refactor: Rename variables for better readability
```

## Contact

If you have any questions or need further assistance, you can reach out to the project maintainers:

- Name: Shaqeeb Akhtar
  - Email: [shaqeebakhtar01@gmail.com]
  - Twitter: [shaqeeb_akhtar](https://twitter.com/shaqeeb_akhtar)

Thank you for your interest in contributing to the CodeCollab backend server! We appreciate your support.
