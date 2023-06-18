import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is a clone of IMBd website. Created By Ashish Kumar Singh.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* Header */}
      <Header />

      <body className={inter.className}>{children}</body>
    </html>
  )
}
