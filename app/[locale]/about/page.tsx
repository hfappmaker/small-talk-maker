import { getTranslations } from "next-intl/server";
import LegalPageLayout from "@/components/LegalPageLayout";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.about" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <LegalPageLayout title={t("title")}>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.whatIs.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.whatIs.content")}
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

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.features.heading")}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {(t.raw("sections.features.items") as string[]).map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.howItWorks.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.howItWorks.content")}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
          {t("sections.languages.heading")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t("sections.languages.list")}
        </p>
      </section>
    </LegalPageLayout>
  );
}
