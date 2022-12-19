let express = require('express')
const router = express.Router();
let db = require('../data/db');

router.use((req,res,next)=>{
console.log('requested URL in users route '+ req.url )
next()
})

router.get('/all', (req,res)=> {
    res.send('All users sent successfully...')
})

router.get('/delete',(req,res)=>{

res.send('All users deleted successfully...')

})

router.get("/seed", function(req, res, next) {
   
   
  });

module.exports = router