import express from "express";

const cv_renderer = function (req, res) {
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
    educations: [
      {
        institution: "Islamic University of Technology",
        period: "2019 - Ongoing",
        degree: "BSc in Software Engineering",
        description: "Specialization of software development",
      },
    ],
    workExperiences: [
      {
        title: "Python developer",
        period: "2019 - current",
        description:
          "Adept at python for server-side development and machine learning applications",
      },
      {
        title: "Javascript developer",
        period: "2020 - current",
        description: "Adept at web design with svelte, p5 and react.",
      },
    ],
  };
  res.render("profile", userData);
};

export default cv_renderer;
