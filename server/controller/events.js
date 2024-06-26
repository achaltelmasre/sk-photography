import Event from "../model/Events.js"; // Ensure the correct path and file extension
import EnquiryMail from "./sendMail.js";

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
      res.status(201).json(savedEvent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export { postApiEvents };
