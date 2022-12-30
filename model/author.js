const {bookshelf} = require('../data/bookshelf')


const Author = bookshelf.model('Author',{
    tableName:'authors',
    books(){
        return this.belongsToMany('Book')
    }
})


module.exports = Author

