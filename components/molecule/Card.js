import Container from '../atom/Container'
import CardImage from '../atom/CardImage'
import Text from '../atom/Text'

function Card({ title, about }){
  return (
    <Container card>
      <CardImage />
      <Container inforCard>
        <Text about>{ title }</Text>
        <Text description>{ about }</Text>
      </Container>
    </Container>
  )
}

export default Card