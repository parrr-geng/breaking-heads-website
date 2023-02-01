const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET about page */
router.get("/about", (req, res, next)=>{
  res.render("information/about.hbs");
})

/* GET content page */
router.get("/content", (req, res, next)=>{
  res.render("products/content.hbs");
})

/* GET coaching page */
router.get("/coaching", (req, res, next)=>{
  res.render("products/coaching.hbs");
})

/* GET merchandise page */
router.get("/merchandise", (req, res, next)=>{
  res.render("products/merchandise.hbs");
})

/* GET turniere page */
router.get("/turniere", (req, res, next)=>{
  res.render("products/turniere.hbs");
})


module.exports = router;
