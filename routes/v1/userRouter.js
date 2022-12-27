var express = require('express');
const router = express.Router();
const User = require('../../model/users')

router.use((req,res,next)=>{
    console.log('requested URL in users route '+ req.url )
    next()
    })




router.get("/", async (req, res) => {
    var users = await new User().fetcrshAll();
    res.json(users);
  });

router.get('/all', (req,res)=> {
   res.send('All users sent successfully...')
})

router.get('/delete',(req,res)=>{

res.send('All users deleted successfully...')

})

router.get("/seed", function(req, res, next) {
  
  
 });

 module.exports = router