const axios  = require("axios");
const express = require("express");
const router = express.Router();

router.get("/:input", (req, res) => {
  const api_key = "98c780296c3d187fbbb88bfdde976f39";
  const friendlyURL = req.params.input.replace(/\s+/g, "+").toLowerCase();
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${friendlyURL}`
    )
    .then((result) => {
      res.json(result.data.results);
    })
    .catch((err) => console.log(err));
});

module.exports = router;