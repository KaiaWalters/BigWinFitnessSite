const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String,
    pointOfContacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
    priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' }, 
})

const EventModel = mongoose.model('Event', EventCountsa)

module.exports = EventModel
