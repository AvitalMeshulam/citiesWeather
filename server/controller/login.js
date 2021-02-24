const mongoose = require('mongoose');
const User = require('../modules/user')
const bcrypt = require("bcrypt")


const login = (req, res) => {
    const { name, password } = req.body;
    console.log( "name:  ", name);
    console.log( "password:  ", password);
    User.find({ name }).then((users) => {
        console.log(users);
        if (users.length === 0) {
            return res.status(401).json({
                message: 'responseNotOk'
            });
        }

        users.map((user) => {
            console.log("the got password", password)
            console.log("the got name", name)

            bcrypt.compare(password, user.password, (error, result) => {
                if (error) {
                    return res.status(401).json({
                        message: 'responseNotOk'
                    });
                }
                console.log("result:    ", result)
                if (result) {
                    return res.status(200).json({
                        message: 'responseOk',
                        user
                    })
                }

                res.status(401).json({
                    message: 'responseNotOk'
                });
            })
        })
    })
}

module.exports = { login }
