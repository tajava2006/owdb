var mysql = require('mysql');
var db = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});


function replacedbOnDisconnect(db) {
  db.on("error", function (err) {
    if (!err.fatal) {
      return;
    }
 
    if (err.code !== "PROTOCOL_CONNECTION_LOST") {
      throw err;
    }
 
    // db.config is actually a ConnectionConfig instance, not the original
    // configuration. For most situations this is fine, but if you are doing
    // something more advanced with your connection configuration, then
    // you should check carefully as to whether this is actually going to do
    // what you think it should do.
    db = mysql.createConnection(db.config);
    replacedbOnDisconnect(db);
    db.connect(function (error) {
      if (error) {
        // Well, we tried. The database has probably fallen over.
        // That's fairly fatal for most applications, so we might as
        // call it a day and go home.
        //
        // For a real application something more sophisticated is
        // probably required here.
        process.exit(1);
      }
    });
  });
}
 
// And run this on every connection as soon as it is created.
replacedbOnDisconnect(db);



module.exports = db;
