import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const meta = {
  title: 'William Martins - Desenvolvedor Full Stack',
  description:
    'Desenvolvedor Full Stack do Brasil. Especializado em criação de aplicações e funcionalidades para aplicativos da web usando C#, React.js e SQL.',
  image:
    ''
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			};
		} finally {
			sheet.seal();
		}
	}

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="William Martins" />
          <meta name="description" content={meta.description} />
          <meta itemProp="name" content={meta.title} />
          <meta itemProp="description" content={meta.description} />
          <meta itemProp="image" content={meta.image} />
          <meta
            name="keywords"
            content="William, William Martins, desenvolvedor, website, programador, Full Stack, personal website, developer, portfolio, sites, web, Santa Catarina, SC, JavaScript, TypeScript, ReactJS, NextJS, software, aplicações, Freelancer, portfolio developer, e-commerce, Evander portfolio"
          />

          <meta name="theme-color" content="#00d9ff" />
          <meta name="copyright" content="William Martins 2023" />
          <meta http-equiv="content-language" content="pt-br" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="cache-control" content="no-cache" />
          <meta http-equiv="pragma" content="no-cache" />
          <meta name="language" content="pt-BR" />
          <meta name="rating" content="general" />
          <link rel="canonical" href="https://www.williammartins.com.br/" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <meta property="og:url" content="https://www.williammartins.com.br/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="William Martins" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />

          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />

          <link rel="icon" href="/icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
