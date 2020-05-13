exports.postAddResource = (req, res, next) => {
    const {title, address, phone, url, checked} = req.body;
    res.json({
        msg: true
    })
} 