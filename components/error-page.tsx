"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

type Action = {
  label: string
  href?: string
  onClick?: () => void
  variant?: "default" | "secondary" | "outline" | "destructive"
}

export function ErrorPage({
  code,
  title,
  description,
  actions = [],
}: {
  code?: string
  title: string
  description: string
  actions?: Action[]
}) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <section className="max-w-xl text-center space-y-6">
        {code ? (
          <p className="font-mono text-muted-foreground" aria-label="Status code">
            {code}
          </p>
        ) : null}

        <h1 className="text-3xl md:text-4xl font-semibold text-pretty">{title}</h1>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {actions.length > 0 ? (
          <div className="flex items-center justify-center gap-3 pt-2">
            {actions.map((a, i) =>
              a.href ? (
                <Button key={i} asChild variant={a.variant ?? "default"}>
                  <Link href={a.href}>{a.label}</Link>
                </Button>
              ) : (
                <Button key={i} onClick={a.onClick} variant={a.variant ?? "default"}>
                  {a.label}
                </Button>
              ),
            )}
          </div>
        ) : null}
      </section>
    </main>
  )
}

export default ErrorPage
