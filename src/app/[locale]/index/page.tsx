import { redirect } from "next/navigation";
import { isLocale } from "@/lib/site";

type LegacyIndexProps = {
  params: Promise<{ locale: string }>;
};

export default async function LegacyIndex({ params }: LegacyIndexProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect("/");
  }

  redirect(`/${locale}`);
}

