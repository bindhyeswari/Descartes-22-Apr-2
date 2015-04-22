var router = require('express').Router();
var ContactModel = require('../models/contacts_model');

// path is mapped /contacts

router.get('/', function (req, res) {
    ContactModel.find({}, function (err, results) {
        if (err) res.status(500).json(err);
        else res.status(200).json(results);
    });
});

router.post('/', function (req, res) {
    // print the post data
    console.log(req.body);

    (new ContactModel(req.body)).save(function (err, result) {
        if (err) res.status(500).json(err);
        else res.status(200).json(result);
    });

});

router.put('/', function (req, res) {
    res.status(200).json({ message: 'IMPL_101' });
});

router.delete('/', function (req, res) {
    res.status(200).json({ message: 'IMPL_101' });
});

module.exports = router;