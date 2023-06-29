const db = require('./connect');

const mongoose = require('mongoose')
const User = require('./connect')
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/manual")

// const user = new User({name: "Kyle", age: 26})
// user.save().then(() => console.log("user Saved"))

async function run() {
    try{
        const user = await User.create({ 
            name: "Lucky",
            age: 26,
            hobbies: ["Weight lifing", "Bowling"],
            address: {
                street: "Main St"
            }
        })
        console.log(user)
    }
   catch(error) {
    console.log(error)
   }
}

run()