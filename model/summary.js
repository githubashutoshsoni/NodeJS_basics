const dbConfig = require("../data/db");
const bookshelf = require("bookshelf")(dbConfig);
require("./book");

const Summary = bookshelf.model("Summary", {
  tableName: "summaries",
  books() {
    return this.belongsTo("Book", "book_id");
  },
});

module.exports = Summary;
