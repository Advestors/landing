import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Advestor - Turn Every Surface Into Revenue',
  description: 'The enterprising marketplace where Advertisers gain exposure and Advestor Hosts turn space into income',
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
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Logo.png" />
        <link rel="shortcut icon" href="/images/Logo.png" />
        <link rel="apple-touch-icon" href="/images/Logo.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
