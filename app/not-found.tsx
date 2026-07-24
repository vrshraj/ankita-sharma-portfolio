import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-serif text-6xl font-bold text-charcoal sm:text-8xl">404</h1>
      <h2 className="mt-4 font-serif text-2xl font-bold text-charcoal sm:text-3xl">Page Not Found</h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-sage px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage/90"
      >
        Go Back Home
      </Link>
    </div>
  )
}
