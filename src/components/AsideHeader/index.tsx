import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

import guipmdevLogo from '@/assets/guipmdev-logo.svg'

import { AsideHeaderContainer, Bio, Navbar, SocialLinks } from './styles'

interface AsideHeaderProps {
  activeSection: string
}

export function AsideHeader({ activeSection }: AsideHeaderProps) {
  return (
    <AsideHeaderContainer>
      <Bio>
        <div className="logo">
          <Image src={guipmdevLogo} alt="" />

          <div>
            <h1>GUIPM.DEV</h1>
            <strong>
              <span>&lt;</span>Fullstack developer <span>/&gt;</span>
            </strong>
          </div>
        </div>

        <p>
          👋 Olá! Meu nome é Guilherme, um desenvolvedor apaixonado por explorar
          o universo dos códigos e encarar desafios.
        </p>
      </Bio>

      <Navbar>
        <Link
          href="#about"
          className={`cursorHover ${activeSection === 'about' ? 'active' : ''}`}
        >
          <span></span> SOBRE
        </Link>

        <Link
          href="#experience"
          className={`cursorHover ${
            activeSection === 'experience' ? 'active' : ''
          }`}
        >
          <span></span> EXPERIÊNCIA
        </Link>

        <Link
          href="#projects"
          className={`cursorHover ${
            activeSection === 'projects' ? 'active' : ''
          }`}
        >
          <span></span> PROJETOS
        </Link>
      </Navbar>

      <SocialLinks>
        <li>
          <Link
            href="https://github.com/guipmdev"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="cursorHover"
          >
            <GitHubLogoIcon width={24} height={24} />
          </Link>
        </li>

        <li>
          <Link
            href="https://www.linkedin.com/in/guilhermeprevedamilek/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="cursorHover"
          >
            <LinkedInLogoIcon width={24} height={24} />
          </Link>
        </li>

        <li>
          <Link
            href="mailto:guipm.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="E-mail"
            className="cursorHover"
          >
            <EnvelopeClosedIcon width={24} height={24} />
          </Link>
        </li>
      </SocialLinks>
    </AsideHeaderContainer>
  )
}
