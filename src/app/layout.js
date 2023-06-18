import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import MenuItem from '@/components/MenuItem';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is a clone of IMBd website. Created By Ashish Kumar Singh.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

        {/* Header */}
        <Header />

        {children}
      </body>
    </html>
  )
}
