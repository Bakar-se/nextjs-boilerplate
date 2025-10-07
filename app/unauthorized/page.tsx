import type { Metadata } from "next"
import ErrorPage from "@/components/error-page"

export const metadata: Metadata = {
  title: "Unauthorized",
}

export default function UnauthorizedPage() {
  return (
    <ErrorPage
      code="401"
      title="Unauthorized"
      description={
        "You don’t have permission to access this page. If you believe this is a mistake, contact an administrator."
      }
      actions={[{ label: "Go home", href: "/" }]}
    />
  )
}
