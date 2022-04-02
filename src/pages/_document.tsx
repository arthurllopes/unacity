import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
            {/*<script id="Adsense-id"  data-ad-client="ca-pub-6157944097638212" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6157944097638212"
        crossOrigin="anonymous"></script>*/}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/*<ins className="adsbygoogle"
            style={{display: 'inline-block', width: '300px', height:'90px'}}
            data-ad-client="ca-pub-6157944097638212"
      data-ad-slot="1234567890"></ins>*/}
        </body>
        
      </Html>
    )
  }
}

export default MyDocument