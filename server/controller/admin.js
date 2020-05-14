const Resource = require('../models/resources')

exports.getResources = (req, res, next) => {
    Resource
        .find()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => res.status(500))
}

exports.postAddResource = (req, res, next) => {
    const {title, address, phone, url, checked} = req.body;
    const resource = new Resource({
        title: title,
        address: address,
        phone: phone,
        url: url,
        checked: Object.keys(checked)
    })
    resource
        .save()
        .then(() => {
            res.json({
                msg: true
            })
        })
        .catch(err => console.log(err))
} 