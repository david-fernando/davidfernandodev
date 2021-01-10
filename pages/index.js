import requestApi from './api/api'

import MainTemplate from '../template/MainTemplate'

export default function Home({ gitData, dataMedium }) {
  return (
    <MainTemplate gitData={gitData} dataMedium={dataMedium} />
  )
}

export async function getStaticProps(){
  const request = requestApi()

  const gitData = await request.getGit()
  const dataMedium = await request.getMedium()

  return {
    props: {
      gitData,
      dataMedium
    }
  }
}
