const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/pricing",
          "/blog",
          "/risk-calculator",
          "/privacy-policy",
          "/terms-and-conditions",
          "/contact-us",
          "/wishlist",
        ],
        disallow: ["/wishlist-tracker"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
