export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const pageviewGTM = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
