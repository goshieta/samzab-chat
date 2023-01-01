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
        <p></p>
      </div>
    </>
  )
}