"use client";

import { useTranslations } from "next-intl";
import LegalPageLayout from "@/components/LegalPageLayout";

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <LegalPageLayout title={t('title')}>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.operator.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.operator.name')}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.email.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          <a
            href={`mailto:${t('sections.email.address')}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {t('sections.email.address')}
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.purpose.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.purpose.content')}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t('sections.response.heading')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('sections.response.content')}
        </p>
      </section>
    </LegalPageLayout>
  );
}
