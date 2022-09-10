const http = require("http");
const fs = require("fs");
const url = require("url");
const { json } = require("node:stream/consumers");
const querystring = require("querystring");
const dataParser = require("./dataParser");

const host = "localhost";
const port = 8000;

const options = {
  port: port,
  path: __dirname + "/public",
  method: "GET",
};

const server = http.createServer(async (req, res) => {
  const urlPath = req.url.split("?")[0];

  // Reading the query parameters
  const queryParams = querystring.parse(req.url.split("?")[1]);
  console.log(queryParams);

  // Formdata parsing (Experimental)
  // const formData = dataParser(req);
  // console.log(formData);

  /*Hosting static file*/
  fs.readFile(options.path + urlPath, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }

    res.writeHead(200);
    res.end(data);
  });
});

server.listen(port, function () {
  console.log(`server running on port ${port}`);
});
