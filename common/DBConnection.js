var mongoDB=require('mongodb');
async function getDBConnection()
{
    try{
        console.log(4)
        var mongoClient=mongoDB.MongoClient;
        var server=await mongoClient.connect(process.env.DB_URL);
        var db=server.db('onlinetest1')
        console.log(5)
        return db
    }
    catch(e)
    {
        console.log(e);
    }

}
module.exports=getDBConnection;