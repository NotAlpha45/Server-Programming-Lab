module.exports = function parseData(req) {
  let parsedData = "";
  const promise = new Promise(function (accept, reject) {
    // When data is comming
    req.on("data", function (stream) {
      console.log(stream);
      parseData += stream;
      console.log(stream);
    });

    // When data stream ends
    req.on("end", function () {
      accept(parseData);
    //   console.log(parseData)
    });

    req.on("error", function (error) {
      reject(error);
    });
  });

  return parseData;
};
