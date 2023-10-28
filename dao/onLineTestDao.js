const getDBConnection=require('../common/DBConnection')
async function getQuestionsDao()
    {
        console.log(3)
       const db=await getDBConnection()
       const collection=db.collection('questions1')
       //const data=await collection.find({}).toArray()
       const data =await collection.aggregate([{$sample:{size:5}}]).toArray()
        console.log(6)
return data;
    }

    module.exports=getQuestionsDao;
