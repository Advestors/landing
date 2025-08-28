import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: 'Advestors - Connect Businesses with the Right Audiences',
  description: 'The marketplace where advertisers and hosts collaborate to maximize exposure and revenue. Get early access today.',
  keywords: 'advertising, marketplace, hosts, advertisers, digital marketing, revenue',
  authors: [{ name: 'Advestors' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}