import Image from 'next/image'
import { MongoClient } from 'mongodb'

export default async function Home() {
  
  const client = await MongoClient.connect('mongodb+srv://tsj:1234@cluster0.b2ehjmu.mongodb.net/')
  const db = client.db('practice')
  let list =  db.collection("test_board").find().toArray();
  console.log(list)
  return (
    <> 
      <div>
        메인 페이지 입니다
        Hello, NextJs!
      </div>
      <div>
        
      </div>
    </>
  )
}
