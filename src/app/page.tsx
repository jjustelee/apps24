import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/site";

export default function HomeRedirect() {
  redirect(`/${DEFAULT_LOCALE}`);
}

