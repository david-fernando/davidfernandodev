import Link from 'next/link'
import { IconBrandWhatsapp } from '@tabler/icons-react'

import style from '@/styles/components/WhatsAppButton.module.css'

function WhatsAppButton(){
  return (
    <Link href="/" className={style.whatsAppButton}>
      <IconBrandWhatsapp size={30} />
      <p>Faça seu orçamento</p>
    </Link>
  )
}


export default WhatsAppButton