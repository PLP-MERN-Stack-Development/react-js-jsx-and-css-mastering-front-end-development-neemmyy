
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

If you want this README to be shorter or to include screenshots and usage examples, tell me what to add and I will update it.
