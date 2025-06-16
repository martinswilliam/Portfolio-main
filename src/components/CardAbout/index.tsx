import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={500}
            height={500}
            className="AboutImg"
            src="/about.svg"
            alt="Imagem de perfil"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Deixe-me apresentar</h2>
            <p>
              Sou um desenvolvedor back-end apaixonado por projetar e implementar soluções robustas e eficientes. Minha especialidade é a criação de APIs e sistemas escaláveis utilizando C# e PostgreSQL.
              <br />
              Você pode conhecer mais sobre o meu perfil e o meu trabalho
              navegando pelo website.
            </p>

            
          </div>

          <div className='aboutButton'>
            <Link href={'/contact'}>
              <a>
                <Button>
                  Entre em contato
                  <TelegramLogo
                    style={{
                      marginBottom: '-0.1rem',
                      marginLeft: '0.2rem',
                    }}
                    size={16}
                    weight="bold"
                  />
                </Button>
              </a>
            </Link>
            <Link href={'/about'}>
              <a>
                <ButtonAlternatives>
                  Ler mais
                  <ArrowRight
                    style={{
                      marginBottom: '-0.1rem',
                      marginLeft: '0.2rem'
                    }}
                    weight="bold"
                    size={16}
                  />
                </ButtonAlternatives>
              </a>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  )
}
