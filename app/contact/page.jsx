/* eslint-disable react/no-unescaped-entities */
// app/contact/page.js
import Link from 'next/link';
import email from '../lib/email';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch about Meegan Farrell and her art.',
};

export default function Contact() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          I'd love to hear from you about Meegan Farrell's art or any questions about rentals.
        </p>
        <div className="mt-8">
          <Link
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
          >
            Email
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">
            {email}
        </p>
      </div>
    </div>
  );
}