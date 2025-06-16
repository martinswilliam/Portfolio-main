import Head from 'next/head'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { CV } from '../components/CV'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'

export default function Resume() {
  const resumeData =
    'https://www.canva.com/design/DAGqfvCaH3U/EtkL8AQq1kjPIC83Pp2BEg/view?utm_content=DAGqfvCaH3U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0203d78c71'

  const previewData = `${resumeData.substr(
    0,
    resumeData.lastIndexOf('/') + 1
  )}view?embed`

  return (
    <>
      <Head>
        <title>Resume | William Martins </title>
        <meta
          name="description"
          content="Aqui você poderá ver ou baixar o meu currículo."
        />
        <meta property="og:title" content="Resume | William Martins" />
        <meta
          property="og:description"
          content="Aqui você poderá ver ou baixar o meu currículo."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../curriculum</p>
          Currículo
          <span>
            <BsFileText /> Curriculum
          </span>
        </Title>
        <Description>
          Aqui você poderá ver ou baixar o meu currículo.
        </Description>

        <PageSection>
          <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="William Martins"
          />

          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  )
}
