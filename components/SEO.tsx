import Head from 'next/head';

const SEO = () => {
  return (
    <Head>
      <title>株式会社Rhapseed | Webサービス開発・プログラミング教育のラプシード</title>
      <link rel='icon' type='image/png' href='/favicon.ico' />
      <link rel='stylesheet' href='/global.css' />
      <link rel='stylesheet' href='/build/bundle.css' />
      <meta property="og:title" content="株式会社Rhapseed | Webサービス開発・プログラミング教育のラプシード" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://rhapseed.com/" />
      <meta property="og:image" content="https://rhapseed.com/ogp.png" />
      <meta property="og:site_name" content="Rhapseed (ラプシード)" />
      <meta property="og:description" content="Rhapseedは自社Webサービスの開発・受託開発を行っています。" />
    </Head>
  )
}
export default SEO;
