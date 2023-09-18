import Image from 'next/image'
import Link from 'next/link'
import { IconExternalLink } from '@tabler/icons-react'

import binaryTraders from '@/images/binarytraders.png'

import style from '@/styles/components/Projects.module.css'

function Projects(){
  return (
    <section className={style.projectsContainer} id='projects'>
      <h2>Projetos</h2>
      <div className={style.content}>
        <span className={style.project}>
          <Image src={binaryTraders} alt='BinaryTraders' />
          <div>
            <p>BinaryTraders.net</p>
            <p>Lorem ipsum dolor sit amet consectetur. Odio tortor pulvinar arcu duis in quam amet rhoncus. Sit sed gravida elit libero lectus suspendisse sit non ipsum. Tincidunt tortor molestie cursus gravida. Praesent in lectus quam ultricies magna erat.</p>
            <Link href='https://binarytraders.net/' target='_blank' >Acessar <IconExternalLink /></Link>
          </div>
        </span>
      </div>
    </section>
  )
}

export default Projects