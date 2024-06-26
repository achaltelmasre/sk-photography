import Event from "../model/Events.js";
import EnquiryMail from "./sendMail.js";
import { responder } from "../util.js";

const postApiEvents = async (req, res) => {
    const { name, phone_number, email, date, events, city_venue, expected_guests, special_requirements, how_did_you_find_us } = req.body;

    const newEvent = new Event({
        name,
        phone_number,
        email,
        date,
        events,
        city_venue,
        expected_guests,
        special_requirements,
        how_did_you_find_us,
    });

    try {
        const savedEvent = await newEvent.save();
        await EnquiryMail(savedEvent);

        // Respond with success message and saved event data
        return responder({
            res,
            success: true,
            data: savedEvent,
            message: ` Thank you so much ${name} for your response...      
                                i will contact you shorty `
        });
    } catch (error) {
        // Respond with error message if save operation fails
        return responder({
            res,
            success: false,
            message: error.message
        });
    }
};

export { postApiEvents };
