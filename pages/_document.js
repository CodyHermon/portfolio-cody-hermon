import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <title>Cody Hermon Portfolio</title>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css'
        />
        <body>
          <Main />
          <NextScript />
          <div id='notifications'></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
