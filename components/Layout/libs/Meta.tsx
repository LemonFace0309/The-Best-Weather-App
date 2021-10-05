import type { NextPage } from 'next';
import Head from 'next/head';

import Props from './props';

const Meta: NextPage<Props> = ({ title = 'Weather', keywords = '', description = '', image = '' }: Props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image}></meta>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
