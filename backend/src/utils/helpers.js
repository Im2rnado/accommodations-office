const mongoose = require('mongoose');

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US');
};

const handleError = (error) => {
    console.error('Error:', error.message);
    return { success: false, message: error.message };
};

const isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

module.exports = {
    formatDate,
    handleError,
    isValidObjectId,
};