import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Links } from '../components/Links'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title } from '../styles/styles'

export default function About() {
  return (
    <>
      <Head>
        <title>About | William Martins </title>
        <meta
          name="description"
          content="Meu nome é William Martins, sou um desenvolvedor Back-End Dotnet (C#)."
        />
        <meta property="og:title" content="About | William Martins" />
        <meta
          property="og:description"
          content="Meu nome é William Martins, sou um desenvolvedor Back-End Dotnet (C#)."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about</p>
            Sobre
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/perfil2.png"
                alt="Imagem de perfil William"/>

              <div className="links">
                <ul>
                  <Link href={'https://github.com/martinswilliam'}>
                    <a target="_blank" aria-label="Link para o Github">
                      <AiFillGithub size={25} /> @martinswilliam
                    </a>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/william-martins27/'}>
                    <a target="_blank" aria-label="Link para o Linkedin">
                      <BsLinkedin size={25} /> @william-martins27
                    </a>
                  </Link>
                  <Link
                    href={'https://api.whatsapp.com/send?phone=554888118535'}
                  >
                    <a target="_blank" aria-label="Link para o WhatsApp">
                      <RiWhatsappFill size={25} /> +55 (48) 98811-8535
                    </a>
                  </Link>
                  
                  <Link href={'mailto:williamgmca@gmail.com'}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link para o email"
                    >
                      <GrMail size={25} /> @williamgmca@gmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Vamos conversar, quem sabe criar um projeto incrível juntos?
                </h3>
                <p>Me mande uma mensagem! 😉</p>
                <Link href={'/contact'}>
                  <a>
                    <ButtonAlt>Contato</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
  Meu nome é William Martins, sou um desenvolvedor com foco em back-end, apaixonado por construir soluções robustas e funcionais.
  Iniciei minha jornada em 2022, já com o objetivo claro de trabalhar com desenvolvimento, enquanto cursava Análise e Desenvolvimento de Sistemas na Unisul.
</p>
<p>
  Desde então, venho me aprofundando em tecnologias como C#, .NET, SQL (PostgreSQL), React e Git, com forte dedicação ao ecossistema back-end.
  O que mais me motiva na área é a capacidade de resolver problemas reais por meio do código, desenvolvendo sistemas completos que vão muito além da interface.
</p>
<p>
  Sou autodidata, constantemente envolvido na criação de projetos práticos. Entre eles, destaco uma plataforma de controle de estoque para computadores personalizados,
  com autenticação JWT e controle de SKUs, além de um sistema de automação de vídeos utilizando Python, APIs e inteligência artificial.
  Atualmente, também estou desenvolvendo uma plataforma gamificada para estudos de C#, com trilhas, recompensas e conteúdos integrados.
</p>
<p>
  Mesmo tendo conhecimento em front-end, meu foco principal é o desenvolvimento back-end.
  Acredito que é no servidor onde a lógica e a inteligência das aplicações realmente acontecem.
  Gosto de manter meus projetos versionados no GitHub para garantir organização, rastreabilidade e evolução contínua do código.
</p>
<p>
  Sigo ampliando minhas habilidades, agora estudando Java com Spring Boot, e estou sempre em busca de desafios que me permitam crescer como desenvolvedor
  e entregar soluções que gerem valor real para as pessoas.
</p>

            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  )
}
