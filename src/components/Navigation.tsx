import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/components/Navigation.module.css'
import logo from '@/images/logo.svg'

function Natigation(){
  return (
    <nav className={style.navgationContainer}>
      <div className={style.content}>
        <span className={style.logotipo}>
          <Image src={logo} alt='logo' width={34} height={34} />
          <p>David Fernando</p>
        </span>
        <span className={style.links}>
          <Link className={style.active} href="/">Início</Link>
          <Link href="#services">Serviços</Link>
          <Link href="/">Projetos</Link>
          <Link href="/">Artigos</Link>
        </span>
      </div>
    </nav>
  )
}

export default Natigation