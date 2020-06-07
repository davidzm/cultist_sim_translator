const Language = require('../models/language-model');

createLanguage = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a language'
        });
    }

    const language = new Language(body);

    if(!language) {
        return res.status(400).json({success: false, error: err});
    }

    language.save()
            .then(() => {
                return res.status(201).json({
                    success: true,
                    id: language._id,
                    message: 'Language created !'
                });
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'Language not created !'
                });
            });
};

updateLanguage = async(req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Language.findOne({ _id: req.params.id}, (err, language) => {
        if(err) {
            return res.status(404).json({
                err,
                message: 'Language not found!'
            });
        }
        language.code = body.code;
        language.name = body.name;

        language.save()
                .then(() => {
                    return res.status(200).json( {
                        success: true,
                        id: language._id,
                        message: 'Language updated!'
                    });
                })
                .catch(error => {
                    return res.status(404).json({
                        error,
                        message: 'Language not updated!'
                    });
                });
    });
};

deleteLanguage = async(req, res) => {
    await Language.findOneAndDelete({_id: req.params.id}, (err, language) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }

        if (!language) {
            return res.status(404).json({success: false, error: 'Language not found'});
        }

        return res.status(200).json({success: true, data: language});
    }).catch(err => console.log(err));
};

getLanguageById = async(req, res) => {
    await Language.findOne({_id: req.params.id}, (err, language) => {
        if(err) {
            return res.status(400).json({sucess: false, error: err});
        }

        if(!language) {
            return res.status(404).json({success: false, error: 'Language not found'});
        }
        
        return res.status(200).json({success: true, data: language});
    }).catch(err => console.log(err));
};

getLanguages = async(req, res) => {
    await Language.find({}, (err, languages) => {
        if(err) {
            return res.status(400).json({success: false, error: err});
        }
        if(!languages.length) {
            return res.status(404).json({success: false, error: 'Language not found'});
        }

        return res.status(200).json({success: true, data: languages});
    }).catch(err => console.log(err));
};

module.exports = {
    createLanguage,
    updateLanguage,
    deleteLanguage,
    getLanguages,
    getLanguageById
};