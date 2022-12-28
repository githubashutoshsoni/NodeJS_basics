const express = require('express')
const router=express.Router()
const Summary  = require('../../model/summary')


router.get('/',async(req,res)=>{

    let books = await Summary.where({id:1}).fetch({withRelated: ['books']})
    .then(function(){

        res.json(books.toJSON());

    })
    .catch(Summary.NotFoundError,function(err){

        res.send('empty response. :/');
        console.log('caught unhandled exception.. so happy :) ')
        console.log(err)


    });
    

})


module.exports = router