import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from './_components/StyledComponentsRegistry';

export const metadata: Metadata = {
  title: 'FeitozaUI Next App Router Consumer',
  description: 'Validates FeitozaUI inside a Next.js App Router client island.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
