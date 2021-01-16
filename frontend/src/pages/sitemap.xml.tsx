/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

interface Page {
  url: string;
}

const pages: Page[] = [{ url: '' }, { url: '/reading-list' }];

const createSitemap = (pages: Page[]): string => {
  const hostURL = 'https://www.yunjaeoh.com';

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map(({ url }) => {
            return `
                    <url>
                        <loc>${`${hostURL}${url}`}</loc>
                        <changefreq>weekly</changefreq>
                        <priority>0.5</priority>
                    </url>
                `;
          })
          .join('')}
    </urlset>
    `;
};

class Sitemap extends React.Component {
  static async getInitialProps({ res }: Record<string, any>): Promise<void> {
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(pages));
    res.end();
  }
}

export default Sitemap;
