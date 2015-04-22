
var mongoose = require('mongoose');

var ContactModel = mongoose.model('contact', {
    name: String,
    email: String
}); // this will show up on the DB as contacts

module.exports = ContactModel;
