const constructorMethod = (app) => {
    app.get("/", (req, res) => {
        res.render('index.html');
    });

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;
