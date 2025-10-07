import ErrorPage from "@/components/error-page"

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      title="Page not found"
      description={"We couldn’t find the page you’re looking for. It may have been moved or deleted."}
      actions={[{ label: "Go home", href: "/" }]}
    />
  )
}
