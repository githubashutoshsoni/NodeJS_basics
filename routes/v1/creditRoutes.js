const express = require('express')
const router=express.Router()
const CreditCard  = require('../../model/creditcard')

 
router.get('/',async(req,res)=>{
    
    // let creditCards = await new CreditCard().fetchAll(); 
    
    let creditCards = await  CreditCard.where({id:1}).fetch({withRelated: ['users']});


    
    res.json(creditCards.toJSON());
 
 
 });
 module.exports = router