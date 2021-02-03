import axios from 'axios'
import returnSpecificRepositories from '../../utils/returnSpecificRepositories'

export default (request, response) => {

  const {
    query: { api }
  } = request

  const getGit = async()=>{
    const data = await axios.get('https://api.github.com/users/david-fernando/repos')

    const repositoryNames = [
      'Listador_de_arquivos',
      'KeyboardVideoController',
      'medium-posts-api',
      'noLoopFor',
      'react-electron-ts'
    ]

    const specificRepositories = returnSpecificRepositories(repositoryNames, data.data)

    const repositorys = [ 
      specificRepositories[1],
      specificRepositories[0],
      specificRepositories[2],
      specificRepositories[3],
      specificRepositories[4]
    ]

    return response.json(repositorys)
  }
  const getMedium = async()=>{
    const data = await axios.get('https://mediumpostsapi.herokuapp.com/?usermedium=@davidfernandodamata21')

    return response.json(data.data)
  }

  const responseData = {
    git: getGit,
    medium: getMedium
  }

  try {
    responseData[api]()    
  } catch {
    return response.json({ message: 404 })
  }

}