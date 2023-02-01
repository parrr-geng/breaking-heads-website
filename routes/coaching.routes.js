const express = require("express");
const router = express.Router();

router.get("/coaching/anfrageformular", (req, res, next)=>{
    res.render("products/anfrageformular.hbs");
})



module.exports = router;