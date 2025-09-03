import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Advestor - Connect Businesses with the Right Audiences',
  description: 'The marketplace where advertisers and hosts collaborate to maximize exposure and revenue. Get early access today.',
  keywords: 'advertising, marketplace, hosts, advertisers, digital marketing, revenue',
  authors: [{ name: 'Advestor' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/images/Logo.png',
    shortcut: '/images/Logo.png',
    apple: '/images/Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
