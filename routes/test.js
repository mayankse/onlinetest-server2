var express =require('express');
var router=express.Router();
const getQuestionsService = require('../services/onlineTestService');

router.get('/get-que',async function(req,res,next)
{
    try{
        //console.log(1);
        const result=await getQuestionsService()
        //console.log(8);
        res.send(result);
    }
    catch(e){
        console.log(e);
        res.send(e);
}})

module.exports=router;