export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 mt-auto text-sm text-gray-700 dark:text-gray-300 w-full">
      © {new Date().getFullYear()} Task Manager App | Built with React + Tailwind
    </footer>
  );
}
