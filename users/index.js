let express = require('express')
const router = express.Router();


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

module.exports = router