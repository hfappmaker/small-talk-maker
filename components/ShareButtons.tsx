"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { useTopicContext } from "@/contexts/TopicContext";
import { generateShareUrl, openShareWindow, copyToClipboard } from "@/lib/share";
import { SharePlatform, ShareButtonConfig } from "@/types/share";

const XIcon = ({ className }: { className?: string }) => (
  <Image
    src="/x.svg"
    alt="X"
    width={20}
    height={20}
    className={className}
  />
);

const getHashtag = (locale: string): string => {
  const hashtags: Record<string, string> = {
    ja: "#雑談メーカー",
    en: "#SmallTalkMaker",
    "zh-CN": "#闲聊话题生成器",
    ko: "#잡담메이커",
    es: "#GeneradorDeTemas",
    de: "#GesprächsthemenGenerator",
    fr: "#GénérateurDeSujets",
    pt: "#GeradorDeTopicos",
  };
  return hashtags[locale] || "#SmallTalkMaker";
};

export default function ShareButtons() {
  const t = useTranslations("share");
  const locale = useLocale();
  const { currentTopic } = useTopicContext();
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const siteUrl = typeof window !== "undefined" ? `${window.location.origin}/${locale}` : "";
  const hashtag = getHashtag(locale);
  const shareText = currentTopic ? `${currentTopic.content}\n${siteUrl}` : "";

  const handleShare = (platform: SharePlatform) => {
    if (!currentTopic) return;

    const shareUrl = generateShareUrl(platform, {
      text: `${currentTopic.content} ${hashtag}`,
      url: siteUrl,
    });
    openShareWindow(shareUrl);
  };

  const handleCopyShare = async () => {
    if (!currentTopic) return;

    const success = await copyToClipboard(shareText);
    if (success) {
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    }
  };

  const buttonConfigs: ShareButtonConfig[] = [
    {
      platform: "x",
      icon: <XIcon className="w-4 h-4 sm:w-5 sm:h-5 invert" />,
      label: t("x"),
      bgColor: "bg-black dark:bg-gray-900",
      hoverColor: "hover:bg-gray-800 dark:hover:bg-gray-700",
      ariaLabel: t("x"),
    },
  ];

  if (!currentTopic) {
    return null;
  }

  return (
    <div className="px-8 pb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex gap-3 justify-center">
        {buttonConfigs.map((config) => (
          <button
            key={config.platform}
            onClick={() => handleShare(config.platform)}
            aria-label={config.ariaLabel}
            className={`
              flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
              font-medium text-white text-sm
              transition-all duration-200
              ${config.bgColor} ${config.hoverColor}
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              dark:focus:ring-offset-gray-800
            `}
          >
            {config.icon}
            <span>{config.label}</span>
          </button>
        ))}
        <div className="relative">
          <button
            onClick={handleCopyShare}
            aria-label={t("copy")}
            className="
              flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
              font-medium text-white text-sm
              transition-all duration-200
              bg-blue-600 hover:bg-blue-700
              dark:bg-blue-500 dark:hover:bg-blue-600
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              dark:focus:ring-offset-gray-800
            "
          >
            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t("copy")}</span>
          </button>
          {showCopiedMessage && (
            <div className="absolute -top-10 left-0 px-3 py-1.5 bg-white dark:bg-gray-800 border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 text-xs font-medium rounded-lg shadow-lg animate-fade-in whitespace-nowrap">
              {t("copied")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
