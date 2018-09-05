const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/noderestapi');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   firstName: String,
   lastName: String,
   email: String,
   password: String,
   permissionLevel: Number
});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true
});

const User = mongoose.model('Users', userSchema);

exports.insert = (userData) => {
    const user = new User(userData);
    return user.save();
};