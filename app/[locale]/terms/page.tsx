import { getTranslations } from "next-intl/server";
import LegalPageLayout from "@/components/LegalPageLayout";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.terms" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });

  return (
    <LegalPageLayout title={t("title")}>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        {t("lastUpdated")}
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.acceptance.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.acceptance.content")}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.serviceDescription.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.serviceDescription.content")}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.useLicense.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.useLicense.content")}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.userConduct.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.userConduct.content")}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.disclaimer.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.disclaimer.content")}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.limitations.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.limitations.content")}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.intellectualProperty.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.intellectualProperty.content")}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.modifications.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.modifications.content")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.governingLaw.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.governingLaw.content")}
        </p>
      </section>
    </LegalPageLayout>
  );
}
