const dbConfig = require("../data/db");
const bookshelf = require("bookshelf")(dbConfig);
module.exports = {
    bookshelf,
};
