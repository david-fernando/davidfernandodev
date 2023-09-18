import Image from 'next/image'
import Link from 'next/link'
import { IconExternalLink } from '@tabler/icons-react'

import binaryTraders from '@/images/binarytraders.png'
import obsignals from '@/images/obsignals.png'
import jdoispisos from '@/images/jdoispisos.png'
import mediumpostscard from '@/images/mediumpostscard.png'
import mediumpostsapi from '@/images/mediumpostsapi.png'

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

        <span className={style.project}>
          <Image src={obsignals} alt='Obsignals' />
          <div>
            <p>Obsignals</p>
            <p>Lorem ipsum dolor sit amet consectetur. Odio tortor pulvinar arcu duis in quam amet rhoncus. Sit sed gravida elit libero lectus suspendisse sit non ipsum. Tincidunt tortor molestie cursus gravida. Praesent in lectus quam ultricies magna erat.</p>
            <Link href='https://chrome.google.com/webstore/detail/obsignals/amkbjfeoamfehgknhbnpggkkcmelkebb' target='_blank' >Acessar <IconExternalLink /></Link>
          </div>
        </span>

        <span className={style.project}>
          <Image src={jdoispisos} alt='J2PISOS' />
          <div>
            <p>J2PISOS</p>
            <p>Lorem ipsum dolor sit amet consectetur. Odio tortor pulvinar arcu duis in quam amet rhoncus. Sit sed gravida elit libero lectus suspendisse sit non ipsum. Tincidunt tortor molestie cursus gravida. Praesent in lectus quam ultricies magna erat.</p>
            <Link href='http://jdoispisos.com.br/' target='_blank' >Acessar <IconExternalLink /></Link>
          </div>
        </span>

        <span className={style.project}>
          <Image src={mediumpostscard} alt='Medium Posts Card' />
          <div>
            <p>Medium Posts Cards</p>
            <p>Lorem ipsum dolor sit amet consectetur. Odio tortor pulvinar arcu duis in quam amet rhoncus. Sit sed gravida elit libero lectus suspendisse sit non ipsum. Tincidunt tortor molestie cursus gravida. Praesent in lectus quam ultricies magna erat.</p>
            <Link href='https://github.com/david-fernando/medium-posts-card' target='_blank' >Acessar <IconExternalLink /></Link>
          </div>
        </span>

        <span className={style.project}>
          <Image src={mediumpostsapi} alt='Medium Posts API' />
          <div>
            <p>Medium Posts API</p>
            <p>Lorem ipsum dolor sit amet consectetur. Odio tortor pulvinar arcu duis in quam amet rhoncus. Sit sed gravida elit libero lectus suspendisse sit non ipsum. Tincidunt tortor molestie cursus gravida. Praesent in lectus quam ultricies magna erat.</p>
            <Link href='https://github.com/david-fernando/medium-posts-api' target='_blank' >Acessar <IconExternalLink /></Link>
          </div>
        </span>

      </div>
    </section>
  )
}

export default Projects