import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String, // Ideally, use Date type for dates
    required: true,
  },
  events: {
    type: String,
    required: true,
  },
  city_venue: {
    type: String,
    required: true,
  },
  expected_guests: {
    type: Number,
    required: true,
  },
  special_requirements: {
    type: String,
  },
  how_did_you_find_us: {
    type: String,
  },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
