import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, hasLocale, localeCookie, locales } from "@/i18n/config";

function getPreferredLocale(request: NextRequest) {
  const saved = request.cookies.get(localeCookie)?.value;
  if (saved && hasLocale(saved)) return saved;

  const accepted = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((entry) => {
      const [tag, quality] = entry.trim().split(";q=");
      return { language: tag.split("-")[0].toLowerCase(), quality: Number(quality ?? 1) };
    })
    .sort((a, b) => b.quality - a.quality);

  return accepted.map(({ language }) => language).find(hasLocale) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const current = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (current) {
    const response = NextResponse.next();
    if (request.cookies.get(localeCookie)?.value !== current) {
      response.cookies.set(localeCookie, current, {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        sameSite: "lax",
      });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${getPreferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
