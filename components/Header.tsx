"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  asHeading?: boolean;
}

export default function Header({ asHeading = true }: HeaderProps) {
  const t = useTranslations('header');
  const titleClassName = "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2";

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
        {asHeading ? (
          <h1 className={titleClassName}>{t('title')}</h1>
        ) : (
          <p className={titleClassName}>{t('title')}</p>
        )}
        <p className="text-gray-600 dark:text-gray-400">
          {t('subtitle')}
        </p>
      </div>
    </header>
  );
}
