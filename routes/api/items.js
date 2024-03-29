const express = require('express');
const router = express.Router();


//Item model

const Item = require('../../models/Item');

// @route get appi/tems
// @desc get all items

//@access public

router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
     .then(items => res.json(items))
});


module.exports = router;