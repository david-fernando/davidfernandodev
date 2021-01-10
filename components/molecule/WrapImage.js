import Container from '../atom/Container'
import ImageProfile from '../atom/ImageProfile'

function WrapImage({ children }){
  return (
    <Container image>
      <ImageProfile src={process.env.PHOTO_PROFILE} alt="David Fernando" />
      {
        children
      }
    </Container>
  )
}

export default WrapImage