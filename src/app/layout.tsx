import type { Metadata } from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import { Inter, JetBrains_Mono, Outfit, Space_Grotesk } from 'next/font/google';
import StyledComponentsRegistry from '@/app/_components/StyledComponentsRegistry';
import SiteFooter from '@/app/_components/SiteFooter';
import SiteHeader from '@/app/_components/SiteHeader';
import {getSiteMetadata, themeScript} from '@/app/_content/site';
import {getSiteUrl} from '@/app/_content/urls';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap'
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap'
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap'
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as 'en' | 'pt-BR';
  const siteMetadata = getSiteMetadata(locale);
  const siteUrl = getSiteUrl();

  return {
    metadataBase: siteUrl ? new URL(siteUrl) : undefined,
    applicationName: 'FeitozaUI',
    title: {
      default: siteMetadata.title,
      template: `%s | ${siteMetadata.shortTitle}`
    },
    description: siteMetadata.description,
    openGraph: {
      type: 'website',
      siteName: 'FeitozaUI',
      title: siteMetadata.title,
      description: siteMetadata.description,
      locale: locale === 'pt-BR' ? 'pt_BR' : 'en_US',
      alternateLocale: locale === 'pt-BR' ? 'en_US' : 'pt_BR'
    },
    twitter: {
      card: 'summary',
      title: siteMetadata.title,
      description: siteMetadata.description
    }
  };
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await getLocale()) as 'en' | 'pt-BR';
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} ${outfit.variable}`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <StyledComponentsRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="site-shell">
              <a className="skip-link" href="#main-content">
                {locale === 'pt-BR' ? 'Ir para o conteudo' : 'Skip to content'}
              </a>
              <SiteHeader />
              {children}
              <SiteFooter />
            </div>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
