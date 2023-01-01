import { NextApiRequest, NextApiResponse } from 'next'

type TestRes = {
  title: string
  content: string
}

function testApi (req: NextApiRequest, res: NextApiResponse<TestRes>){
  const result: TestRes = {
    title: 'test title',
    content: 'test content',
  }
  res.status(200).send(result)
}

export default testApi