const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CourseApp');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourses:[{type:Schema.ObjectId,ref:'Course'}]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    imageLink:String

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}