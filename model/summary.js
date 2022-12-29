const { bookshelf } = require("../data/bookshelf");
require("./book");

const Summary = bookshelf.model("Summary", {
  tableName: "summaries",
  book() {
    return this.belongsTo("Book", "book_id");
  },
});

module.exports = Summary;
