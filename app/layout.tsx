import type React from "react"
import { GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-PK6HB293" />
        <Script
          type="text/javascript"
          src="https://app.monetizze.com.br/upsell_incorporado.php"
          strategy="beforeInteractive"
        />
        {/* Preload para carregamento otimizado (Tynk Video Viewer) */}
        <link rel="preconnect" href="https://play.tynk.ai" />
        <link rel="dns-prefetch" href="https://play.tynk.ai" />
        <link rel="prerender" href="https://play.tynk.ai/p/55c0525d-8354-4cd6-a98f-34a31df5b1aa" />
      </head>
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  generator: "v0.app",
}
