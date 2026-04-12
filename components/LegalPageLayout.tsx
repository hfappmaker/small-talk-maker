"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Header from "./Header";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  const t = useTranslations('navigation');
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <Header asHeading={false} />

      <main className="w-full max-w-3xl mb-8">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-6"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {t('backToHome')}
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            {title}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {children}
          </div>
        </article>
      </main>
    </div>
  );
}
