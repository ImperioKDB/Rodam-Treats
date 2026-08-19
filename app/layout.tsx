import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rodam Treats | Freshly Baked Nigerian Snacks',
  description: 'Freshly baked Nigerian chin chin, made to order and delivered across Lagos.',
  metadataBase: new URL('https://rodam-treats.lovable.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}