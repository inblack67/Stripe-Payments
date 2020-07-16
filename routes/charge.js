const express = require('express');
const router = express.Router();
const { test } = require('../controllers/charge');

router.post('/', test);

module.exports = router;