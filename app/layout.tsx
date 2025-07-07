import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "3D Cheat Sheet Sonner",
  description: "Lummi",
  generator: "lummi.ai",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          classNames={{
            toast: "w-fit",
          }}
        />
      </body>
    </html>
  )
}
