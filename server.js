const express = require("express");
const app = express();
app.use(express.static(__dirname + "/dist/ng-front")); // serve our static files

// direct all of the requests to index.html
app.all("/*", (req, res) => {
  res.status(200).sendFile(__dirname + "/dist/ng-front/index.html");
});
app.listen(process.env.PORT || 8080);
