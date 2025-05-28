import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import ClientNavbarWrapper from '@/components/ClientNavbarWrapper';
import { LoginProvider } from '@/components/LoginContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Nibol | Test Tecnico',
  description: 'App per prenotare spazi di lavoro',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="font-sans bg-white text-nibol-dark">
        <LoginProvider>
          <ClientNavbarWrapper />
          {children}
        </LoginProvider>
      </body>
    </html>
  );
}
