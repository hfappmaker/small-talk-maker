"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations('header');

  return (
    <header className="w-full py-8">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1"></div>
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-end">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {t('title')}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t('subtitle')}
        </p>
      </div>
    </header>
  );
}
