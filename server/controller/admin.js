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
    const {title, address, phone, url, services, website} = req.body;
    const resource = new Resource({
        title: title,
        address: address,
        phone: phone.split(/\D+/gi).join('').trim(),
        url: url,
        website: website,
        services: services
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

exports.postEditResource = (req, res, next) => {
    const {title, address, phone, url, services, website, id} = req.body;
    Resource
        .findById(id)
        .then(resource => {
            resource.title = title;
            resource.address = address;
            resource.url = url;
            resource.services = services;
            resource.phone = phone;
            resource.website = website;
            return resource.save()
        })
        .then(() => {
            res.json({
                msg: true
            })
        })
        .catch(err => console.log(err))
} 

exports.postDeleteResource = (req, res, next) => {
    const idToDelete = req.body.id
    Resource
        .findByIdAndRemove(idToDelete)
        .then(() => {
            res.json({
                msg: true
            })
        })
        .catch(err => console.log(err))
}