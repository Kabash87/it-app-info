import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IT APP | Información',
  description: 'Informacion sobre la aplicación IT APP',
  keywords: ['IT APP', 'Información', 'Aplicación IT'],
  authors: [{ name: 'Diego Hernández', url: 'https://kabash.carrd.co/' }],
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
