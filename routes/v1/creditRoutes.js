const express = require("express");
const router = express.Router();
const CreditCard = require("../../model/creditcard");

router.get("/", async (req, res) => {
  // let creditCards = await new CreditCard().fetchAll();

  try {



    let creditCards = await CreditCard.where({ user_id: 2 }).fetch({
      withRelated: ["users"],
    });
  
  
  
  
    res.json(creditCards.toJSON());
  } catch (error) {
    res.send(error)
  }
});
module.exports = router;
