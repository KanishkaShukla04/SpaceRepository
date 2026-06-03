import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kanishka Shukla — AI Systems Engineer',
  description: 'Portfolio of Kanishka Shukla — AI/ML Engineer, VIT Bhopal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}