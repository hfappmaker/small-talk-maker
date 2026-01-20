import { SharePlatform, ShareData } from "@/types/share";

export function generateShareUrl(
  platform: SharePlatform,
  data: ShareData
): string {
  const encodedText = encodeURIComponent(data.text);
  const encodedUrl = encodeURIComponent(data.url);

  switch (platform) {
    case "x":
      return `https://x.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
    case "line":
      return `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;
    default:
      return "";
  }
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      return false;
    }
  }
}

export function openShareWindow(url: string): void {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
}
