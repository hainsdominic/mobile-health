const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');

//@route   GET
//@ desc   View a list of of all profile
//@ access Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

//@route   POST
//@ desc   Add a new item
//@ access Public
router.post('/', async (req, res) => {
    for (let i = 0; i < req.body.patients.length; i++) {
        try {
            let profile = new Profile(req.body.patients[i]);

            await profile.save();
            res.status(200).send('Profile added successfully');
        } catch (err) {
            console.error(err);
            res.status(500).send('Server error');
        }
    }
});

module.exports = router;
