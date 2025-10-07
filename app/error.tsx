"use client"

import ErrorPage from "@/components/error-page"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {


  return (
    <ErrorPage
      code="500"
      title="Something went wrong"
      description={"An unexpected error occurred. You can try again, or go back to the homepage."}
      actions={[
        { label: "Try again", onClick: () => reset() },
        { label: "Go home", href: "/", variant: "secondary" },
      ]}
    />
  )
}
