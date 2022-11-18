const fs = require("fs");

function postUserMessage(req, res) {
  let messageObj = {
    sender: req.body.sender,
    receiver: req.body.receiver,
    message: req.body.message,
  };

  let data = JSON.stringify(messageObj, null, 2);

  fs.writeFile("squeaks.json", data, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
}

module.exports = {
  postUserMessage,
};
