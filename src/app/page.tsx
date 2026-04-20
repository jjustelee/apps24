import { permanentRedirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/site";

export default function HomeRedirect() {
  permanentRedirect(`/${DEFAULT_LOCALE}`);
}
