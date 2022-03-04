const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/popular", (req, res) => {
  // const api_key = "98c780296c3d187fbbb88bfdde976f39";
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=98c780296c3d187fbbb88bfdde976f39`
    )

    .then((result) => {
      res.json(result.data.results);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
