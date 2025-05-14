const express = require('express');
const homeController = require('../controllers/homeController.js');
const produitsController = require('../controllers/produitsController.js')
const router = express.Router();

router.get('/' , homeController.getHomePage);

router.get('/produitslist' , produitsController.getProduitslistPage);

router.get('/produitdetails/:id', produitsController.getProduitDetails);
module.exports = router;