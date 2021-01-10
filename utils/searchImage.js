function searchImage(data){
  let text;
  let image;
  let arrayImage = []
  const regexp = new RegExp(/.*jpeg/)
  data.map((item, index) =>{
    text = data[index]['content:encoded']._cdata
    image = regexp.exec(text)[0].split(/"/g)[3]
    arrayImage.push(image)
  })

  return arrayImage
}

export default searchImage