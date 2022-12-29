const express = require('express')
const router=express.Router()
const Summary  = require('../../model/summary')


router.get('/',async(req,res)=>{

     await Summary.where({id:2}).fetch({require: false, withRelated: ['book']})
    .then(function(books){

        res.json(books.toJSON());

    })
    .catch(Summary.NotFoundError,function(err){

        res.send('empty response. :/');
        console.log('caught unhandled exception.. so happy :) ')
        console.log(err)


    });
    

})


module.exports = router