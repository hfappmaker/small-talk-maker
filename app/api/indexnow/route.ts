import { NextResponse } from "next/server";
import { locales } from "@/lib/i18n/config";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "4f9ad3cc801389af4c2d43c209305653";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://small-talk-maker.vercel.app";

function getAllUrls(): string[] {
  const routes = ["", "/about", "/privacy", "/terms", "/contact"];
  const urls: string[] = [];

  for (const locale of locales) {
    for (const route of routes) {
      urls.push(`${BASE_URL}/${locale}${route}`);
    }
  }

  return urls;
}

export async function POST(request: Request) {
  // Require a secret token to prevent unauthorized submissions
  const authHeader = request.headers.get("authorization");
  const expectedToken = process.env.INDEXNOW_SUBMIT_SECRET;

  if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const urls = getAllUrls();

  const body = {
    host: new URL(BASE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    return NextResponse.json(
      { error: "IndexNow submission failed", detail: text },
      { status: response.status }
    );
  }

  return NextResponse.json({ submitted: urls.length, urls });
}
