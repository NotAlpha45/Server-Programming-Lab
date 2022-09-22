import express from "express";
import userData from "../data/cvData.json" assert { type: "json" };

const cv_renderer = function (req, res) {
  
  res.render("profile", userData);
};

export default cv_renderer;
