const translate = require('google-translate-api');
var langs = {
    'auto': 'Automatic',
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'az': 'Azerbaijani',
    'eu': 'Basque',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bs': 'Bosnian',
    'bg': 'Bulgarian',
    'ca': 'Catalan',
    'ceb': 'Cebuano',
    'ny': 'Chichewa',
    'zh-cn': 'Chinese Simplified',
    'zh-tw': 'Chinese Traditional',
    'co': 'Corsican',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'en': 'English',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'tl': 'Filipino',
    'fi': 'Finnish',
    'fr': 'French',
    'fy': 'Frisian',
    'gl': 'Galician',
    'ka': 'Georgian',
    'de': 'German',
    'el': 'Greek',
    'gu': 'Gujarati',
    'ht': 'Haitian Creole',
    'ha': 'Hausa',
    'haw': 'Hawaiian',
    'iw': 'Hebrew',
    'hi': 'Hindi',
    'hmn': 'Hmong',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'ig': 'Igbo',
    'id': 'Indonesian',
    'ga': 'Irish',
    'it': 'Italian',
    'ja': 'Japanese',
    'jw': 'Javanese',
    'kn': 'Kannada',
    'kk': 'Kazakh',
    'km': 'Khmer',
    'ko': 'Korean',
    'ku': 'Kurdish (Kurmanji)',
    'ky': 'Kyrgyz',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'lt': 'Lithuanian',
    'lb': 'Luxembourgish',
    'mk': 'Macedonian',
    'mg': 'Malagasy',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'mi': 'Maori',
    'mr': 'Marathi',
    'mn': 'Mongolian',
    'my': 'Myanmar (Burmese)',
    'ne': 'Nepali',
    'no': 'Norwegian',
    'ps': 'Pashto',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'ma': 'Punjabi',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sm': 'Samoan',
    'gd': 'Scots Gaelic',
    'sr': 'Serbian',
    'st': 'Sesotho',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'es': 'Spanish',
    'su': 'Sudanese',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'te': 'Telugu',
    'th': 'Thai',
    'tr': 'Turkish',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'cy': 'Welsh',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'zu': 'Zulu'
};

const constructorMethod = (app) => {
    app.get("/", (req, res) => {
        res.render('layouts/index');
    });
/*
    app.get("/:baseLang/:targetLang/:word", (req, res) => {
        let bLang = undefined;
        let tLang = undefined;
        let baseLang = req.params.baseLang;
        if(baseLang in langs){
            bLang = langs[baseLang];
        }
        let targetLang = req.params.targetLang;
        if(targetLang in langs){
            tLang = langs[targetLang];
        }

        let mainWord = req.params.word;

        if(bLang && tLang){
            translate(mainWord, {from: bLang, to: tLang}).then(apiRes => {
                res.render('layouts/quizzer', {
                    lang1: bLang,
                    lang2: tLang,
                    mainWord: mainWord,
                    translatedWord: apiRes.text
                });
            }).catch(err => {
                res.sendStatus(500);
                console.error(err);
            });
        }else{
            res.sendStatus(500);
            console.error("Target or base language code not recognized");
        }
    })
    */
    app.get("/learn/:word", (req, res) => {
        let mainWord = req.params.word;

        translate(mainWord, {to: 'es'}).then(apiRes => {
            res.render('layouts/quizzer', {
                lang1: 'english',
                lang2: 'spanish',
                mainWord: mainWord,
                translatedWord: apiRes.text
            });
        }).catch(err => {
            res.sendStatus(500);
            console.error(err);
        });
    })

    app.get("/:word", (req, res) => {
        let mainWord = req.params.word;

        translate(mainWord, {to: 'es'}).then(apiRes => {
            res.render('layouts/quizzer', {
                lang1: 'english',
                lang2: 'spanish',
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
