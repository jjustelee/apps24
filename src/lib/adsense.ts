const ADSENSE_ACCOUNT_PATTERN = /^ca-pub-\d{16}$/;
const DEFAULT_GOOGLE_ADSENSE_ACCOUNT = "ca-pub-6241537261482252";

export function getGoogleAdsenseAccount() {
  const account =
    process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ACCOUNT ||
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT ||
    DEFAULT_GOOGLE_ADSENSE_ACCOUNT;

  if (!account || !ADSENSE_ACCOUNT_PATTERN.test(account)) {
    return null;
  }

  return account;
}

export function getGoogleAdsensePublisherId() {
  const account = getGoogleAdsenseAccount();

  if (!account) {
    return null;
  }

  return account.replace("ca-", "");
}
