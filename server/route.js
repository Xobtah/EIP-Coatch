/**
 * Created by xobtah on 22/03/17.
 */

module.exports = app => {

    app
        .get('/', (req, res) => {
            res.render('mainPage');
        })
        .get('/app', (req, res) => {
            res.render('appPage');
        })
        .get('/user', (req, res) => {
            res.render('userPage');
        })
        .post('/api/file', (req, res) => {
            if (!req.files)
                return (res.status(400).send('No files were uploaded.'));
            return (res.status(200).send('OK'));
        });

};