import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/app/components/Navbar";
import GoogleCaptchaWrapper from "@/app/GoogleCaptchaWrapper";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portifolio',
  description: 'Danilo Nicacio Portifolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <GoogleCaptchaWrapper>
          {children}
      </GoogleCaptchaWrapper>
      </body>
    </html>
  )
}
