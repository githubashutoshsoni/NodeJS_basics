const dbConfig = require('../data/db');
// const express = require('express')
// const router = express.Router();
const bookshelf = require('bookshelf')(dbConfig)
const User = require('./users')
// bookshelf.plugin('registry')
// const User = userIndex.User

// router.use((req,res,next)=>{
//     console.log('requested URL in credit route '+ req.url )
//     next()
//     })


const CreditCard = bookshelf.Model.extend({
    tableName:'credit_card',
    users(){
        return this.belongsTo('User')
    }
})



  

// module.exports = router
module.exports = bookshelf.model('CreditCard',CreditCard);


