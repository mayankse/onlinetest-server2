var getQuestionsDao=require('../dao/onLineTestDao')
async function getQuestionsService()
{
    console.log(2)
    const data=await getQuestionsDao();
    console.log(7)
    return data;
}


module.exports=getQuestionsService


//function f1()
//{

//}
//module.exports={getQuestions,f1};
//var obj=require('test')
//obj.getQuestions
//obj.f1