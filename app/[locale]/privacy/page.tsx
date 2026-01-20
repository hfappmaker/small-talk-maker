"use client";

import { useTranslations } from "next-intl";
import LegalPageLayout from "@/components/LegalPageLayout";

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <LegalPageLayout title={t('title')}>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        {t('lastUpdated')}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.intro.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.intro.content')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.dataCollection.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.dataCollection.content')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.cookies.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.cookies.content')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.thirdParty.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          {t('sections.thirdParty.content')}
        </p>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {t('sections.thirdParty.adsense.heading')}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.thirdParty.adsense.content')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.dataSecurity.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.dataSecurity.content')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.childrenPrivacy.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.childrenPrivacy.content')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.changes.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.changes.content')}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.contact.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.contact.content')}
        </p>
      </section>
    </LegalPageLayout>
  );
}
