<<<<<<< HEAD

# Task Manager

A simple Task Manager web application built with React and Vite. It supports creating, editing, completing, and deleting tasks, with optional due date/time, priority and category tags. Tasks persist in the browser using `localStorage`.

## Features

- Create tasks with title and optional description
- Optional due date and time
- Priority levels (low / medium / high)
- Category tags (Personal, Work, Shopping, etc.)
- Search, filter (All / Active / Completed) and progress indicator
- Responsive UI with dark mode support

## Tech stack

- React
- Vite
- Tailwind CSS

## Requirements

- Node.js 16+ and npm

## Quick start

1. Install dependencies:

```powershell
npm install
```

2. Start development server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
```

## Project structure

```
src/
	api/         # optional API helpers
	components/
		common/    # Navbar, Footer, Button, Card
		tasks/     # TaskManager and task-related components
	context/     # theme/context providers
	hooks/       # custom hooks
	layout/      # Layout component
	pages/       # App pages (Home)
	App.jsx
	main.jsx
```

## Usage notes

- Tasks are stored locally in the browser (`localStorage`). They are not synced to a server.
- Date/time values are displayed using the browser locale.

## Contributing

If you want to extend the project: fork, add a branch, create changes and open a PR. Keep changes small and add tests for new behavior.

## License

Use or adapt this project as you like. Add a LICENSE file to declare a formal license if required.

---


## Assignment Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
  - Basic project structure
  - Pre-configured Tailwind CSS
  - Sample component templates

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx          # Main application component
```

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Deploy your application and add the URL to your README.md

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/) 
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
