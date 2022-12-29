let express = require("express");

const { bookshelf } = require("../data/bookshelf");

// bookshelf.plugin('registry')

const User = bookshelf.model("User", {
  tableName: "users",
  credit_cards() {
    return this.hasMany("CreditCard","user_id");
  },
});

// module.exports = {router,User}

module.exports = User;
