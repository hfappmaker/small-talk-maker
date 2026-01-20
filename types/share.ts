export interface ShareData {
  text: string;
  url: string;
}

export type SharePlatform = "x" | "line";

export interface ShareButtonConfig {
  platform: SharePlatform;
  icon: React.ReactNode;
  label: string;
  bgColor: string;
  hoverColor: string;
  ariaLabel: string;
}
