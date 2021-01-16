import * as React from 'react';
import Head from 'next/head';

export interface MetaHeaderProps {
  pageTitle: string;
  metaDescription: string;
  indexStatus: boolean;
  urlPath: string;
}

const MetaHeader: React.FunctionComponent<MetaHeaderProps> = (props: MetaHeaderProps) => {
  const { pageTitle, metaDescription, indexStatus, urlPath } = props;

  const getIndexStatus = (indexStatus: boolean): string => {
    if (indexStatus === true) {
      return 'index follow';
    }
    return 'noindex nofollow';
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content={getIndexStatus(indexStatus)} />
        <meta property="og:url" content={urlPath} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="" />
      </Head>
    </>
  );
};

export default MetaHeader;
