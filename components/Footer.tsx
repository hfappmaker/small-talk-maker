"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const links = [
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/privacy`, label: t('privacy') },
    { href: `/${locale}/terms`, label: t('terms') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <footer className="w-full mt-auto border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
