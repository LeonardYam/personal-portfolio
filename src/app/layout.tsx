import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import NavBar from "@/app/NavBar";
import Footer from "@/app/Footer";
import 'normalize.css'
import './global.css';
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
// Required for FontAwesome icons to work in NextJS
// See: https://fontawesome.com/docs/web/use-with/react/use-with#next-js
config.autoAddCss = false;


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leonard Yam',
  description: 'Personal website for LeonardYam'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics/>
        <NavBar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
