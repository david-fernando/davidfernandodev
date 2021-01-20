function returnSpecificRepositories(repositoryNames, data){
  let specificRepositories = []

  data.map((item, index) => {
    return repositoryNames.map((subItem, subIndex) => {
      if(data[index].name === repositoryNames[subIndex]){
        specificRepositories.push(data[index])
      }
    })
  })

  return specificRepositories
}

export default returnSpecificRepositories