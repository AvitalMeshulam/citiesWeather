const mongoose = require('mongoose');
const User = require('../modules/user')
const bcrypt = require('bcrypt');


const createUser = (req, res) => {
    const { name, mail, password } = req.body;

    User.find({ mail }).then((users) => {
        console.log(users)
        if (users.length >= 1) {
            return res.status(409).json({
                message: 'responseNotOk'
            })
        }

        bcrypt.hash(password, 10, (error, hash) => {
            if (error) {
                return res.status(500).json({
                    error
                })
            }

            const user = new User({
                _id: new mongoose.Types.ObjectId(),

                mail,
                name,
                password: hash
            })

            user.save().then((result) => {
                console.log(result);

                res.status(200).json({
                    message: 'responsetOk', user
                });
            }).catch(error => {
                res.status(500).json({
                    message: 'responsetNotOk',
                    error
                })
            });
        });
    })
}
module.exports = { createUser }


