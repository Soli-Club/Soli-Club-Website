import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow: string
  title: string
  children: ReactNode
}

export function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <header className="page-header">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="page-header-copy">{children}</div>
    </header>
  )
}
