import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
const routing = {
  locales: ["en", "az"] as const, // Sabit locale değerleri
};

export default getRequestConfig(async ({ locale }) => {
  // `locale`'i routing.locales içinde geçerli bir değer olarak kontrol et
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
