import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default function robots(): MetadataRoute.Robots {
  const headersList = headers();
  const host = headersList?.get?.('x-forwarded-host') ?? 'campwaycustoms.com.au';
  const protocol = 'https';
  const siteUrl = `${protocol}://${host}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
