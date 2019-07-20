const sequelize =require('sequelize');
const db=new sequelize(
    'project', 
    'muskang', 
    'boogie',
    {
        dialect: 'mysql',
        host: 'localhost'
    }  
)

const userstable=db.define('Userstables',{
    child : sequelize.STRING,
    date : sequelize.STRING,
    parent : sequelize.STRING,
    contact: sequelize.STRING,
    email : sequelize.STRING,
    username: {
        type: sequelize.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false  }
    },    
    )
db.sync().then(()=>{
    console.log("Database is ready")
}).catch((err)=>{
    console.log(err+" DB not ready")
})
exports=module.exports={db,userstable}