const express = require("express");
const router = express.Router();
const Author = require("../../model/author");

router.get("/", async (req, res) => {
  try {
    const author = await Author.where({ id: 3 }).fetch({
      withRelated: ["books"],
    });

    res.json(author.toJSON());
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

module.exports = router
