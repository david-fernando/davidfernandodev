import Image from "next/image"

import style from '@/styles/components/Services.module.css'
import webService from '@/images/elderly-man-using-smartphone.png'
import freelance from '@/images/man-working-at-the -table.png'
import programmer from '@/images/working-on-code.png'

function Services(){
  return (
    <section className={style.serviceContainer} id="services">
      <h2>Serviços</h2>
      <div className={style.content}>
        <div className={style.card}>
          <Image src={webService} alt='Desenvolvimento Web' />
          <div>
            <p>Desenvolvimento Web</p>
            <p>Construo belos sites responsivos e modernos, que se ajustam as necessidades de seus usuários, usando as tecnologias mais modernas do mercado.</p>
          </div>
        </div>
        <div className={style.card}>
          <Image src={freelance} alt='Desenvolvimento freelancer' />
          <div>
            <p>Desenvolvimento Freelancer</p>
            <p>Como desenvolvedor web freelancer, abraço diversos tipos de projetos, oferecendo soluções personalizadas para atender às suas necessidades específicas.</p>
          </div>
        </div>
        <div className={style.card}>
          <Image src={programmer} alt='Atualização e manutenção' />
          <div>
            <p>Atualização e manutenção</p>
            <p>Não apenas construo, mas também faço a atualização e manutenção em seu site, garantindo que tudo sempre esteja online e funcionando perfeitamente.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services