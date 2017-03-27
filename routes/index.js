const constructorMethod = (app) => {
    app.get("/", (req, res) => {
        res.render('layouts/index');
    });

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;
