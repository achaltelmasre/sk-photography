// sendVerifyMail.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const EnquiryMail = async (eventData) => {
    const { name, email, phone_number, date, events, city_venue, expected_guests, special_requirements, how_did_you_find_us } = eventData;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: 'shubhamkhamle@gmail.com',
            subject: 'New Event Enquiry',
            html: `
                <p>Hi!<br/>A new event enquiry  with the following details: <br/> Please contact us....</p>
                <ul>
                    <li><b>Name:</b> ${name}</li>
                    <li><b>Email:</b> ${email}</li>
                    <li><b>Phone Number:</b> ${phone_number}</li>
                    <li><b>Date:</b> ${date}</li>
                    <li><b>Event:</b> ${events}</li>
                    <li><b>City/Venue:</b> ${city_venue}</li>
                    <li><b>Number of Guests Expected:</b> ${expected_guests}</li>
                    <li><b>Special Requirements:</b> ${special_requirements}</li>
                    <li><b>How Did You Find Us:</b> ${how_did_you_find_us}</li>
                </ul>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

    } catch (error) {
        console.log("Email not sent");
        console.log(error);
    }
};

export default EnquiryMail ;
