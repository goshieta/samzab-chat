import Styles from "../styles/Home.module.css"
import Header from "./components/header"
import Head from "next/head"

export default function home(){
  return (
    <>
      <Head>
        <title>samzab-Chat</title>
      </Head>
      <Header></Header>
      <div id={Styles.content}>
        <ChatArea></ChatArea>
        <InfoArea></InfoArea>
      </div>
    </>
  )
}

const testChatArr=[
  ["江田島市民","広島県","江田島住みやすい。みんな移住しよう"],
  ["Jon","青森県","青森いいとこだべ。"],
  ["呉氏","広島県","呉市には様々な観光地、歴史を感じることのできる場所があります。是非呉市に移住をご検討ください。"],
  ["あああ","東京都","東京やばい"],
  ["らくらくらくだ","鳥取県","こんにちは！おげんきですか。"],
  ["荒らしです","沖縄県","ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"],
  ["野菜生活","鹿児島県","荒らしはよくないですし、このサイトを運営している人はとても有能なのですぐに消されますよ。"],
  ["HTMLマスター","熊本県","<img src='./都道府県/石川県'>"],
  ["HTMLマスター","熊本県","ワンチャンHTMLタグ埋め込めるかと思ったけど無理だった"]
]

function ChatArea(){
  const showChat=testChatArr
  return (
    <div id={Styles.chatArea}>
      {
        testChatArr.map(value=>{
          const newElem=<div className={Styles.chatBox}>
            <div className={Styles.profile}>
              <img src={`./都道府県/${value[1]}.jpg`} alt={`${value[1]}の画像`} title={value[1]} width="100" height="100" className={Styles.chatPeopleLiveImg}/>
              <p className={Styles.namePeople}>{value[0]}</p>
            </div>
            <div className={Styles.chatValue}>
              <p className={Styles.chatBody}>{value[2]}</p>
            </div>
          </div>
          return newElem
        })
      }
    </div>
  )
}

function InfoArea(){
  return (
    <div></div>
  )
}