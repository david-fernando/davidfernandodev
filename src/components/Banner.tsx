import Image from 'next/image'
import Link from 'next/link'
import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium, IconFileDescription } from '@tabler/icons-react'
import style from '@/styles/components/Banner.module.css'

import photo from '@/images/photo.png'

function Banner(){
  return (
    <div className={style.bannerContainer}>
      <span className={style.content}>
        <Image src={photo} alt='Foto' />
        <div>
          <h1>David Fernando</h1>
          <h2>desenvolvedor web</h2>
        <span className={style.links}>
          <Link href="https://github.com/david-fernando" target='_blank' >
            <IconBrandGithub size={27} stroke={1.5} /> GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/david-fernando-souza" target='_blank' >
            <IconBrandLinkedin size={29} stroke={1.3} /> Linkedin
          </Link>
          <Link href="http://medium.com/david-fernando" target="_blank" >
            <IconBrandMedium size={29.1} stroke={1.3} /> Medium
          </Link>
          <Link href="/" target="_blank" >
            <IconFileDescription size={26.8} stroke={1.3} /> Currículo
          </Link>
        </span>
        </div>
      </span>
    </div>
  )
}

export default Banner