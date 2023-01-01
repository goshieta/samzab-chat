import Styles from "../../styles/header.module.css"

export default function header(props:{}){
    return (
        <>
            <div id={Styles.head}>
                <div id={Styles.hamButton}>
                    <input type="checkbox" id={Styles.hamCheck} />
                    <label htmlFor={Styles.hamCheck}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div id={Styles.backGray}>
                        <div id={Styles.hamBody}>
                            <a>使い方</a>
                            <a href="">サイト情報</a>
                            <a href="./connect">連絡</a>
                            <a href="">プライバシーポリシー</a>
                        </div>
                    </div>
                </div>
                <h1 id={Styles.title}>samzab-Chat</h1>
                <div id={Styles.headLink}>
                    <a>使い方</a>
                    <a href="">サイト情報</a>
                    <a href="./connect">連絡</a>
                    <a href="">プライバシーポリシー</a>
                </div>
            </div>
            <div id={Styles.headBack}></div>
        </>
    )
}