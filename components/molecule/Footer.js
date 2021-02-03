import Container from '../atom/Container'
import Text from '../atom/Text'

function Footer(){
  return (
    <Container footer>
      <span>
        <Text>
          Made by David Fernando | Hosted on Vercel
        </Text>
      </span>
    </Container>
  )
}

export default Footer