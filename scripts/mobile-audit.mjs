// Run this function with Playwright CLI's run-code after opening the local site.
export default async function auditMobile(page) {
  const origin = await page.evaluate(() => location.origin);
  const xml = await (await page.request.get(origin + "/sitemap.xml")).text();
  const paths = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1].replace(/^https?:\/\/[^/]+/, ""));
  const report = [];
  const runtimeErrors = [];
  let currentPath = "";
  const onError = error => runtimeErrors.push({ path: currentPath, message: error.message });
  page.on("pageerror", onError);
  for (const path of paths) {
    currentPath = path;
    await page.goto(origin + path);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    });
    const state = await page.evaluate(() => {
      const clipped = [...document.querySelectorAll("main *")].filter(element => {
        const rect = element.getBoundingClientRect();
        if (!rect.width || !rect.height || (rect.right <= innerWidth + 1 && rect.left >= -1)) return false;
        for (let parent = element.parentElement; parent && parent.tagName !== "BODY"; parent = parent.parentElement) {
          if (["auto", "scroll", "hidden"].includes(getComputedStyle(parent).overflowX)) return false;
        }
        return true;
      }).map(element => ({ tag: element.tagName, className: String(element.className) })).slice(0, 8);
      const smallInputs = [...document.querySelectorAll("input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=color]),textarea,select")]
        .filter(element => element.getBoundingClientRect().height && parseFloat(getComputedStyle(element).fontSize) < 16)
        .map(element => element.tagName + "." + element.className);
      return { clipped, smallInputs };
    });
    if (state.clipped.length || state.smallInputs.length) report.push({ path, ...state });
  }
  page.off("pageerror", onError);
  return { width: page.viewportSize().width, pages: paths.length, report, runtimeErrors };
}
