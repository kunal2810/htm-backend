const mongoose = require('mongoose');

const { Schema } = mongoose;

const floorDetails = new Schema({
    floorName: {
        type: String,
        required: true,
    },
    rooms: {
        type: Array,
        required: true,
    },
    numberOfRooms: {
        type: String,
        required: true,
    },
});

const floorSchema = new Schema({
    floors: {
        type: [floorDetails],
        required: true,
    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers",
        required: true,
    },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('floor', floorSchema);