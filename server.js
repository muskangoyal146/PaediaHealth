const express=require('express');
const app=express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', require('./routes/root'))
app.get('/', (req,res)=>{
    res.sendFile('/Users/muskan/Desktop/OOSE Project/public/project_main.html')
})

app.listen(1406, ()=> console.log("Server running on http://localhost:1406"));