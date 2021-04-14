const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersInCustomersSchema = new Schema({
    name: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    designation: {
        type: String,
        required: true,
    }
});

const customersSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    hotelName: {
        type: String,
        required: true,
    },
    hotelAddress: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    users: {
        type: [usersInCustomersSchema],
        required: true,
    },

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('customers', customersSchema);