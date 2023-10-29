import { NextPage } from "next";
import React from "react"

type ShishaLog = {
  id: number,
  title: string
};

const testDatas: ShishaLog[] = [
  {
    "id": 1,
    "title": "スッキリ"
  },
  {
    "id": 2,
    "title": "森林"
  }
]

const Index: NextPage = () => {
  return (
    <>
      {testDatas.map((data, i) => (
        <a key={i} href="/{i}">
          <LogCard id={data.id} title={data.title} />
        </a>
      ))}
      <p>test</p>
    </>
  )
}
export default Index;

const LogCard: React.FC<ShishaLog> = ({id, title}) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}
