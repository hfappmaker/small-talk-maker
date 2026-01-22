import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/config';
import Footer from '@/components/Footer';
import BubbleBackground from '@/components/BubbleBackground';
import { TopicProvider } from '@/contexts/TopicContext';
// import Script from 'next/script';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Messages {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages({ locale }) as Messages;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://small-talk-maker.vercel.app';

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    keywords: messages.metadata.keywords,

    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      type: 'website',
      locale: locale,
      siteName: messages.metadata.title,
      url: `${baseUrl}/${locale}`,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: messages.metadata.title,
          type: 'image/png',
        }
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: messages.metadata.title,
      description: messages.metadata.description,
      images: [`${baseUrl}/og-image.png`],
    },

    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'ja': `${baseUrl}/ja`,
        'de': `${baseUrl}/de`,
        'es': `${baseUrl}/es`,
        'fr': `${baseUrl}/fr`,
        'ko': `${baseUrl}/ko`,
        'pt': `${baseUrl}/pt`,
        'zh-CN': `${baseUrl}/zh-CN`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3718710324489086"
          crossOrigin="anonymous"></script>
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <BubbleBackground />
        <NextIntlClientProvider messages={messages}>
          <TopicProvider>
            {children}
            <Footer />
          </TopicProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
