// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async(request, response) => {
  response.statusCode = 200

  const test = async()=>{
    return 'test'
  }

  console.log(request)

  const {
    query: { name }
  } = request

  response.json({ data: name })
}
