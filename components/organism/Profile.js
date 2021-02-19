import Container from '../atom/Container'
import Branding from '../molecule/Branding'
import WrapImage from '../molecule/WrapImage'
import InfoProfile from '../molecule/InfoProfile'
import SocialLink from '../molecule/SocialLink'

function Profile(){
  return (
    <WrapImage>
      <Container $profile>
        <Branding />
        <InfoProfile />
        <SocialLink />
      </Container>
    </WrapImage>
  )
}

export default Profile