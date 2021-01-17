import axios from 'axios'

function requestApi(){

  async function request(url){
    const data = await axios.get(url)

    return data.data
  }
  async function getGit(){
    const data = await request('https://api.github.com/users/david-fernando/repos')
    return [
      data[4],
      data[3],
      data[6],
      data[8],
      data[11]
    ]
  }
  async function getMedium(){
    const data = await request('https://mediumpostsapi.herokuapp.com/?usermedium=@davidfernandodamata21')

    return data.dataMedium
  }

  return {
    getGit,
    getMedium
  }
}

export default requestApi