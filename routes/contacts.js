var router = require('express').Router();

// path is mapped /contacts

router.get('/', function (req, res) {
    res.status(200).json({ message: 'IMPL_101' });
});

router.post('/', function (req, res) {
    // print the post data
    console.log(req.body);
    res.status(200).json({ message: 'IMPL_101' });
});

router.put('/', function (req, res) {
    res.status(200).json({ message: 'IMPL_101' });
});

router.delete('/', function (req, res) {
    res.status(200).json({ message: 'IMPL_101' });
});

module.exports = router;