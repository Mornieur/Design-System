import type {MetadataRoute} from 'next';
import {getSiteUrl} from '@/app/_content/urls';

const publicRoutes = [
  '/',
  '/docs/getting-started',
  '/docs/installation',
  '/foundations',
  '/components',
  '/accessibility',
  '/architecture'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return [];
  }

  return publicRoutes.map((route) => ({
    url: new URL(route, `${siteUrl}/`).toString(),
    lastModified: new Date()
  }));
}
