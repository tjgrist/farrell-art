// app/not-found.js
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container text-center justify-center">
      <div>Could not find requested resource.</div>
      <br/>
      <div>
      <Link href="/" className="mt-5">
        Return Home
      </Link>
      </div>
    </div>
  )
}