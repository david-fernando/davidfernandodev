import axios from 'axios'
import MainTemplate from '../template/MainTemplate'

export default function Home({ gitData, dataMedium }) {
  return (
    <MainTemplate gitData={gitData} dataMedium={dataMedium} />
  )
}

export async function getStaticProps(){

  const gitData = await axios.get('http://localhost:3000/api/git')
  const dataMedium = await axios.get('http://localhost:3000/api/medium')

  return {
    props: {
      gitData: gitData.data,
      dataMedium: dataMedium.data.dataMedium
    }
  }
}
