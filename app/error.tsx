'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h2 className="font-serif text-3xl font-bold text-charcoal">Something went wrong!</h2>
      <p className="mt-4 text-muted-foreground">We encountered an unexpected error.</p>
      <button
        onClick={() => reset()}
        className="mt-8 rounded-full bg-sage px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage/90"
      >
        Try again
      </button>
    </div>
  )
}
