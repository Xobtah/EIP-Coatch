/**
 * Created by xobtah on 22/03/17.
 */

module.exports = (express, app) => {

    app
        .use(express.static('public'))
        .use('/node_modules', express.static('node_modules'));

    app
        .set('views', __dirname + '/../public/views')
        .set('view engine', 'jade');

};