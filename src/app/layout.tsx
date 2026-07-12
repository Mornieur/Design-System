import type { Metadata } from 'next';
import {
  Inter,
  JetBrains_Mono,
  Outfit,
  Space_Grotesk
} from 'next/font/google';
import StyledComponentsRegistry from '@/app/_components/StyledComponentsRegistry';
import SiteFooter from '@/app/_components/SiteFooter';
import SiteHeader from '@/app/_components/SiteHeader';
import { siteMetadata, themeScript } from '@/app/_content/site';
import './globals.css';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.shortTitle}`
  },
  description: siteMetadata.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} ${outfit.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <StyledComponentsRegistry>
          <div className="site-shell">
            <a className="skip-link" href="#main-content">
              Skip to content
            </a>
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
