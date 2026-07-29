import type {MetadataRoute} from 'next';
import {getSiteUrl} from '@/app/_content/urls';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    ...(siteUrl ? {sitemap: `${siteUrl}/sitemap.xml`} : {})
  };
}
