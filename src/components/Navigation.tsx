import Image from 'next/image'
import style from '@/styles/components/Navigation.module.css'
import logo from '@/images/logo.svg'
import Link from 'next/link'

function Natigation(){
  return (
    <nav className={style.navgationContainer}>
      <div className={style.content}>
        <span className={style.logotipo}>
          <Image src={logo} alt='logo' />
          <p>David Fernando</p>
        </span>
        <span className={style.links}>
          <Link className={style.active} href="/">Início</Link>
          <Link href="/">Serviços</Link>
          <Link href="/">Projetos</Link>
          <Link href="/">Artigos</Link>
        </span>
      </div>
    </nav>
  )
}

export default Natigation