import HeadComponent from '../components/molecule/HeadComponent';
import Container from '../components/atom/Container'
import Main from '../components/atom/Main'
import Profile from '../components/organism/Profile'
import SliderCard from '../components/organism/SliderCard'
import Card from '../components/molecule/Card'
import Footer from '../components/molecule/Footer'

function MainTemplate({ gitData, dataMedium }){
  return (
    <Container>
      <HeadComponent title="David Fernando" />
      <Main>
        <Profile />
        <SliderCard title="Projetos">
          {
            gitData.map((item, index) =>(
              <Card key={index} title={ gitData[index].name } about={ gitData[index].description } />
            ))
          }
        </SliderCard>
        <SliderCard title="Artigos no Medium">
          {
            dataMedium.map((items, index) =>(
              <Card key={index} title={ dataMedium[index].title } about={ dataMedium[index].description } />
            ))
          }
        </SliderCard>
      </Main>
      <Footer />
    </Container>
  )
}

export default MainTemplate