const express = require('express');
const uploadPhoto = require('../controllers/multerControllers');

const multerRouter = express.Router();

multerRouter.route('/').post(uploadPhoto);

module.exports = multerRouter;