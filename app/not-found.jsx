// app/not-found.js
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="button">
        Return Home
      </Link>
    </div>
  )
}