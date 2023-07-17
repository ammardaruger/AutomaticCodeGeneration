const express = require("express");
const router = express.Router();

// loading User model (mongoose)
const User = require("../../models/User");


router.post("/register", (req, res) => {

    let errors =  {};
    //checking if user with same email exists in DB
    User.findOne({
            email: req.body.email
        })
        .then((user) => {
            // if user exists then returning error
            if (user) {       
                errors.email = "email already exists";

                return res.status(400).json(errors);
            } else {


                // creating new user from User model
                const newUser = new User({
                    email: req.body.email,
                    password: req.body.password
                });
                
                newUser.save()
                .then((user) => {
                    res.status(200).json({success: true})
                })
                .catch((err) => {
                    console.log(err);
                });             
            }
        });
});


router.post("/login", (req, res) => {



   const email = req.body.email;
   const password = req.body.password;

   // check if email exists in DB
   User.findOne({
           email
       })
       .then((user) => {

           // checking user is true or not
           if (!user) {
               errors.email = "user not found";

               return res.status(404).json(errors);
           }

           if (req.body.password === user.password){
               res.json({
                   success: true
               })
           } else {
            res.json({
                success: false
            })
           }
       });

});

module.exports = router;
