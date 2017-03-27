const translate = require('google-translate-api');

const constructorMethod = (app) => {
    app.get("/", (req, res) => {
        res.render('layouts/index');
    });

    app.get("/:word", (req, res) => {
        let lang1 = "english";
        let lang2 = "spanish";
        let mainWord = req.params.word;

        translate(mainWord, {to: 'es'}).then(apiRes => {
            res.render('layouts/quizzer', {
                lang1: lang1,
                lang2: lang2,
                mainWord: mainWord,
                translatedWord: apiRes.text
            });
        }).catch(err => {
            res.sendStatus(500);
            console.error(err);
        });


    })

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;
