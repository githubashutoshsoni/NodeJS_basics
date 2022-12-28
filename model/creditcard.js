const dbConfig = require('../data/db');

const bookshelf = require('bookshelf')(dbConfig)
const User = require('./users')



const CreditCard = bookshelf.model('CreditCard',{
    tableName:'credit_card',
    users(){
        return this.belongsTo('User')
    }
})



  

// module.exports = router
module.exports = CreditCard


