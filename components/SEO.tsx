import Head from 'next/head';

const SEO = () => {
  return (
    <Head>
      <title>株式会社YuBASE | Webサービス開発・プログラミング教育のユーベース</title>
      <link rel='icon' type='image/png' href='/favicon.ico' />
      <link rel='stylesheet' href='/global.css' />
      <link rel='stylesheet' href='/build/bundle.css' />
      <meta property="og:title" content="株式会社YuBASE | AnyPalette運営・Webサービス開発・プログラミング教育" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yubase.co.jp/" />
      <meta property="og:image" content="https://yubase.co.jp/ogp.png" />
      <meta property="og:site_name" content="株式会社YuBASE (ユーベース)" />
      <meta property="og:description" content="YuBASEはAnyPaletteの他、受託開発・プログラミング教育を行う開発会社です。遊び心を大切に。" />
    </Head>
  )
}
export default SEO;
