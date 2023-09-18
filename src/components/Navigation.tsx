import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/components/Navigation.module.css'
import logo from '@/images/logo.svg'

function Natigation(){
  const [ LinkActived, setLinkActived ] = useState('home')

  return (
    <nav className={style.navgationContainer}>
      <div className={style.content}>
        <span className={style.logotipo}>
          <Image src={logo} alt='logo' width={34} height={34} />
          <p>David Fernando</p>
        </span>
        <span className={style.links}>
          <Link
           onClick={() => setLinkActived('home')} 
           className={(LinkActived === 'home')? style.active: ''} 
           href="/"
           >
            Início
          </Link>
          <Link
           onClick={() => setLinkActived('services')} 
           className={(LinkActived === 'services')? style.active: ''} 
           href="#services"
           >
            Serviços
          </Link>
          <Link
           onClick={() => setLinkActived('projects')} 
           className={(LinkActived === 'projects')? style.active: ''} 
           href="#projects"
           >
            Projetos
          </Link>
          <Link
           onClick={() => setLinkActived('articles')} 
           className={(LinkActived === 'articles')? style.active: ''} 
           href="/"
           >
            Artigos
          </Link>
        </span>
      </div>
    </nav>
  )
}

export default Natigation