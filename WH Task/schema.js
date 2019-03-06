var mongoose = require('mongoose')

var SmartieSchema = new mongoose.Schema({
    id: Number,
    pink: Number,
    orange: Number,
    blue: Number,
    green: Number,
    yellow: Number,
    purple: Number,
    brown: Number,
    red: Number
});

// SmartiesSchema.statics.addNew = function(email) {
//    var newPdp = new this({
//      email: email
//     });
//   newPdp.save();
//   console.log("new pdp created")
// };

var Smartie = mongoose.model('Smartie', SmartieSchema);

module.exports = {Smartie};

