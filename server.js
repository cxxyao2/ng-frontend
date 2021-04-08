// get environment variables
const fs = require("fs");
const targetPath = "./src/environments/environment.ts";
const envConfigFile = `export const environment = {
   apiBaseUrl: '${process.env.API_BASE_URL}',
   apiUrl: '${process.env.API_URL}',
   appName: '${process.env.APP_NAME}',
   awsPubKey: '${process.env.AWSKEY}',
   nodeEnv: '${process.env.NODE_ENV}',
   production: '${process.env.PRODUCTION}'
};
`;
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      `Angular environment.ts file generated correctly at ${targetPath} \n`
    );
  }
});

const express = require("express");
const app = express();
app.use(express.static(__dirname + "/dist/ng-front")); // serve our static files

// direct all of the requests to index.html
app.all("/*", (req, res) => {
  res.status(200).sendFile(__dirname + "/dist/ng-front/index.html");
});
app.listen(process.env.PORT || 8080);

// ./src/environment/environment.ts
