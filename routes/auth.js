const router = require('express').Router();
const User = require('../models/user');
//Register
router.post("/register", async (request, response) => {
    const newUser = new User({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
    }
    );
    // var resString =
    //     "\nusername : " + newUser.username +
    //     "\nemail : " + newUser.email +
    //     "\npassword : " + newUser.password;

    try {
        const savedUser = await newUser.save();
        // console.log("registered succesfully" + resString);
        // response.send(resString);
        response.status(201).json(savedUser)
        console.log("try worked !");
    } catch (error) {
        response.status(500).json(error);
    }
})

module.exports = router;

