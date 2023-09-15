import Image from 'next/image'
import style from '@/styles/components/Banner.module.css'

import photo from '@/images/photo.png'

function Banner(){
  return (
    <div className={style.bannerContainer}>
      <Image src={photo} alt='Foto' />
    </div>
  )
}

export default Banner