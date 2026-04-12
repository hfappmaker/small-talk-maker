#!/usr/bin/env node
/**
 * Submit all site URLs to IndexNow (Bing, Yandex, etc.)
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs
 *
 * Environment variables:
 *   NEXT_PUBLIC_BASE_URL   – deployed site URL (default: https://small-talk-maker.vercel.app)
 *   INDEXNOW_KEY           – your IndexNow API key (default: hardcoded key)
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://small-talk-maker.vercel.app";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "4f9ad3cc801389af4c2d43c209305653";

const locales = ["ja", "en", "zh-CN", "ko", "es", "de", "fr", "pt"];
const routes = ["", "/about", "/privacy", "/terms", "/contact"];

const urls = locales.flatMap((locale) =>
  routes.map((route) => `${BASE_URL}/${locale}${route}`)
);

const body = {
  host: new URL(BASE_URL).hostname,
  key: INDEXNOW_KEY,
  keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
  urlList: urls,
};

console.log(`Submitting ${urls.length} URLs to IndexNow...`);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

if (response.ok) {
  console.log(`Success (HTTP ${response.status}): all URLs submitted.`);
} else {
  const text = await response.text();
  console.error(`Failed (HTTP ${response.status}): ${text}`);
  process.exit(1);
}
