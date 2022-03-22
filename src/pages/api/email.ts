const nodemailer = require("nodemailer");
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const {name, phone, email, subject, message} = req.body
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_USER, // generated ethereal user
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        },
    });

    const mailData = {
        from: `${name} <${process.env.NEXT_PUBLIC_EMAIL_USER}>`, // sender address
        to: `${process.env.NEXT_PUBLIC_EMAIL_USER}`, // list of receivers
        replyTo: `${email}`,
        subject: `${subject}`, // Subject line
        text: `${message}`, // plain text body
        html: `<h3>${subject}</h3>
        <div>${message}</div><br/>
        <p>Telefone: ${phone}</p>`
    }
    transporter.sendMail(mailData, function (err: any, info: any) {
        if (err) {
            res.status(400).json({ message: 'Error'})
        }
        else {
            res.status(200).json({ message: 'Success'})
        }
    })
    
}