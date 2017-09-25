var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // try to initialize the db on every request if it's not already
    // initialized.
    //if (!db) {
    //    initDb(function(err){});
    //}
    //if (db) {
    //    var col = db.collection('counts');
    //    // Create a document with request IP and current time of request
    //    col.insert({ip: req.ip, date: Date.now()});
    //    col.count(function(err, count){
    //        res.render('index.html', { pageCountMessage : count, dbInfo: dbDetails });
    //    });
    //} else {
    //    res.render('index.html', { pageCountMessage : null});
    //}
    res.render('index');
});

module.exports = router;
