import { FaYoutube } from 'react-icons/fa6'
import {
  RxEnvelopeClosed,
  RxFigmaLogo,
  RxGithubLogo,
  RxLink1,
  RxLinkedinLogo,
} from 'react-icons/rx'

export const icons = {
  // ===== Radix Icons =====
  email: RxEnvelopeClosed,
  figma: RxFigmaLogo,
  github: RxGithubLogo,
  link: RxLink1,
  linkedin: RxLinkedinLogo,

  // ===== Font Awesome =====
  youtube: FaYoutube,
} as const
