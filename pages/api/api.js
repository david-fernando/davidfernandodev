import axios from 'axios'
import convertToJson from '../../utils/convertToJson.js'
import searchImage from '../../utils/searchImage.js'

function requestApi(){

  async function request(url){
    const data = await axios.get(url)

    return data.data
  }
  async function getGit(){
    const data = await request('https://api.github.com/users/david-fernando/repos')
    return [
      data[3],
      data[2],
      data[6],
    ]
  }
  async function getMedium(){
    const data = await request('https://medium.com/feed/@davidfernandodamata21')
    const dataConverted = convertToJson(data)
    const dataArray = dataConverted.rss.channel.item
    const arrayImage = searchImage(dataArray)
    let dataMedium = []

    dataArray.map((item, index) =>{
      dataMedium.push({
        title: dataConverted.rss.channel.item[index].title._cdata,
        link: dataConverted.rss.channel.item[index].link._text,
        image: arrayImage[index]
      })
    })

    return dataMedium
  }

  return {
    getGit,
    getMedium
  }
}

export default requestApi