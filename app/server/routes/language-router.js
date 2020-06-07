const express = require('express');

const LanguageCtrl = require('../controllers/language-ctrl');

const router = express.Router();

router.post('/language', LanguageCtrl.createLanguage);
router.put('/language/:id', LanguageCtrl.updateLanguage);
router.delete('/language/:id', LanguageCtrl.deleteLanguage);
router.get('/language/:id', LanguageCtrl.getLanguageById);
router.get('/languages', LanguageCtrl.getLanguages);

module.exports = router;