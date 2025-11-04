import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow flex flex-col items-center p-4">{children}</main>
      <Footer />
    </div>
  );
}
