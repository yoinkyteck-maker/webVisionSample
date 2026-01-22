var express = require('express');
const path = require("path")
var app = express();
var info = {port: 49333}
// Serve static files from the 'public' directory (or any directory you choose)
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to handle requests for any file
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, req.params[0]);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.log(filePath)
      res.status(404).send('File not found!');
    }
  });
});
app.listen(info.port, function () {
  console.log(`Server listening on port ${info.port}!`);
 });