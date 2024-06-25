import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendVerifyMail = async (name, email, tempUserId) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: 'achaltelmasre@gmail.com',
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to:  process.env.EMAIL_USER,
            subject: 'Verification Mail',
            html: `
                <p>Hi!<br/> Can you allow <u><b>${name}</b></u> (${email}) to register their data?</p>
                
            `
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

    } catch (error) {
        console.log("Email not sent");
        console.log(error);
    }
};

export default sendVerifyMail;
