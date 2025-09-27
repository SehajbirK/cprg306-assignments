import './globals.css';
import { Geist_Sans, Geist_Mono } from '@next/font/google';

const geistSans = Geist_Sans({ subsets: ['latin'], variable: '--geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--geist-mono' });

export const metadata = {
  title: 'Shopping List',
  description: 'Week 3 Shopping List Assignment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
