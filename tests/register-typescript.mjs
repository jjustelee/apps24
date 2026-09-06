import { registerHooks } from "node:module";
import { existsSync } from "node:fs";

// Resolve the app's aliases for Node's built-in TypeScript test runner.
registerHooks({
  load(url, context, nextLoad) {
    const isSource = url.startsWith(new URL("../src/", import.meta.url).href) && url.endsWith(".ts");
    return nextLoad(url, isSource ? { ...context, format: "module-typescript" } : context);
  },
  resolve(specifier, context, nextResolve) {
    if (specifier === "next/server") return nextResolve("next/server.js", context);
    const base = specifier.startsWith("@/")
      ? new URL(`../src/${specifier.slice(2)}`, import.meta.url)
      : specifier.startsWith(".") && context.parentURL
        ? new URL(specifier, context.parentURL)
        : null;
    if (base && !/\.[a-z]+$/i.test(base.pathname)) {
      for (const suffix of [".ts", ".tsx"]) {
        const candidate = new URL(`${base.href}${suffix}`);
        if (existsSync(candidate)) return nextResolve(candidate.href, context);
      }
    }
    return nextResolve(specifier, context);
  },
});
