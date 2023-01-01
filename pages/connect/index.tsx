import Head from "next/head"
import Header from "../components/header"
import Style from "../../styles/components.module.css"
import React, { useRef, useState } from "react"

export default function connect(){
    const nameRef=useRef<HTMLInputElement>(null)
    const emailRef=useRef<HTMLInputElement>(null)
    const messageRef=useRef<HTMLTextAreaElement>(null)

    let [screenNum,setScreenNum]=useState<boolean>(true)

    const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        let data={
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value,
        }

        await fetch('api/contact',{
            method:"POST",
            headers:{
                Accept:"application/json,text.plain",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data),
        }).then(res=>{
            if(res.status==200){
                console.log("メールの送信に成功しました")
                setScreenNum(false)
                console.log(screenNum)
            }
        })
    }

    return (
        <>
            <Head>
                <title>報告・お問い合わせ - samzabChat</title>
            </Head>
            <Header></Header>
            <div id={Style.contents} style={{display: screenNum?"block":"none"}}>
                <h2 id={Style.pageTitle}>報告・お問い合わせ</h2>
                <p id={Style.pageInfo}>samzab-Chatの報告・お問い合わせページです。疑問点やエラーバグなどの報告、このようなアップデートをしてほしいなど書き込んでください。また返信を希望される場合はメールアドレスに、自分のメールアドレスを書き込んでください。</p>
                <form id={Style.form} onSubmit={handleSubmit}>
                    <label htmlFor="">メールアドレス</label>
                    <input type="email" ref={emailRef}/>
                    <label htmlFor="">タイトル</label>
                    <input type="text" required ref={nameRef}/>
                    <label htmlFor="">メッセージ</label>
                    <textarea name="" id="" ref={messageRef} required></textarea>
                    <button type="submit" id={Style.goButton}>送信</button>
                </form>
            </div>
            <div id={Style.submitAfter} style={{display: screenNum?"none":"block"}}>
                <p>報告ありがとうございました。処理は正常に完了しました。</p>
                <a href=".">トップへ戻る</a><br />
                <a href="./connect">ほかのメッセージを送信</a>
            </div>
        </>
    )
}