import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import email from "../lib/email";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <nav className="flex space-x-4 mb-4 sm:mb-0">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
            Home
          </Link>
          <Link href={`mailto:${email}`} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
            Contact
          </Link>
        </nav>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Meegan Farrell. All rights reserved.
        </div>
      </div>
      <Analytics />
    </footer>
  );
}