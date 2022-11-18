const users = require("../users.json");

const getHome = (req, res) => {
  console.log(users);
  res.render("home", { userNames: users });
  // res.send("OK");
};

module.exports = {
  getHome,
};
