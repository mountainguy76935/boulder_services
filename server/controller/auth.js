const User = require('../models/user')
const bcrypt = require('bcryptjs')

exports.postRegister = (req, res, next) => {
    const {username, password, affiliation, name, email} = req.body;
    User
        .findOne({
            email: email
        })
        .then(userCheck => {
            if (userCheck) {
                return res.json({
                    msg: false
                })
            } else {
                return bcrypt
                    .hash(password, 12)
                    .then(hashedPw => {
                        const user = new User({
                            username: username,
                            password: hashedPw,
                            affiliation: affiliation,
                            name: name,
                            email: email,
                            likes: [],
                            reviews: []
                        })
                        user
                            .save()
                            .then(() => {
                                res.json({
                                    msg: true
                                })
                            })
                            .catch(err => console.log(err))
                    })
            }
        })
        .catch(err => console.log(err))
};

exports.postLogin = (req, res, next) => {
    const { password, username } = req.body;
    User
        .findOne({
            username: username
        })
        .then(user => {
            if (!user) {
                return res.json({
                    msg: 'no user'
                })
            }
            return bcrypt
                .compare(password, user.password)
                .then(match => {
                    if (match) {
                        //set session here!!!
                        //req.session.loggedIn = true;
                        //req.session.user = user
                        // return req.session.save(err => {
                        //     console.log(err);
                            return res.json({
                                msg: 'success'
                            })
                        // })
                    }
                    res.json({
                        msg: 'no match'
                    })
                })
        })
}