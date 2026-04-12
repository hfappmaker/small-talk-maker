import { getTranslations } from "next-intl/server";
import LegalPageLayout from "@/components/LegalPageLayout";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.contact" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <LegalPageLayout title={t("title")}>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.operator.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.operator.name")}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.email.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          <a
            href={t("sections.email.address")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {t("sections.email.linkText")}
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.purpose.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.purpose.content")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.response.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.response.content")}
        </p>
      </section>
    </LegalPageLayout>
  );
}
