import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is a clone of IMBd website. Created By Ashish Kumar Singh.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Providers>
        
          {/* Header */}
          <Header />

          {children}
        </Providers>

      </body>
    </html>
  )
}