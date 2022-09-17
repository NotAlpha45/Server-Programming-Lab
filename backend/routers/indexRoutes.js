import express from "express";

const profile_router = express.Router();

profile_router.get("/", function (req, res) {
  //   res.send("This is profile page");
  const userData = {
    name: "Maheen Mashrur Hoque",
    designation: "Developer",
    address: "Dhaka, Bangladesh",
    email: "maheen@gmail.com",
    phone: "12345",
    skills: [
      {
        title: "Python",
        fluency: 90,
      },
      {
        title: "Javascript",
        fluency: 80,
      },
      {
        title: "C and C++",
        fluency: 70,
      },
    ],
    languages: [
      {
        title: "English",
        fluency: 100,
      },
      {
        title: "Bengali",
        fluency: 100,
      },
    ],
  };
  res.render("profile", userData);
});

export default profile_router;
