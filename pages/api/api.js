import axios from 'axios'
import returnSpecificRepositories from '../../utils/returnSpecificRepositories'

function requestApi(){

  async function request(url){
    const data = await axios.get(url)

    return data.data
  }
  async function getGit(){
    const data = await request('https://api.github.com/users/david-fernando/repos')

    const repositoryNames = [
      'Listador_de_arquivos',
      'KeyboardVideoController',
      'medium-posts-api',
      'noLoopFor',
      'react-electron-ts'
    ]

    const specificRepositories = returnSpecificRepositories(repositoryNames, data)

    return [ 
      specificRepositories[1],
      specificRepositories[0],
      specificRepositories[2],
      specificRepositories[3],
      specificRepositories[4]
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