import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from  "nodemailer"

export default function sendGmail(req:NextApiRequest,res:NextApiResponse){
    const transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        auth:{
            user:process.env.GMAILUSER,
            pass:process.env.GMAILPASS
        }
    })

    //メール内容
    const toHostMailData={
        from:req.body.email,
        to: "tamerika563@gmail.com",
        sugject: '[お問い合わせ・報告]'+req.body.name,
        text: req.body.message,
        html: `
            <p>[タイトル]</p>
            <p>${req.body.name}</p>
            <p>[メッセージ]</p>
            <p>${req.body.message}</p>
            <p>[メールアドレス]</p>
            <p>${req.body.email}</p>
        `,
    }

    transporter.sendMail(toHostMailData,function(err,info){
        if(err)console.log(err)
        else console.log(info)
    })

    return res.send("成功しました！")
}