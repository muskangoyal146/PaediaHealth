const route=require('express').Router();
const path=require('path');
const userstable=require('../db').userstable
const db=require('../db')

route.get('/', (req, res)=>{
    res.sendFile('/Users/muskan/Desktop/OOSE Project/public/project_main.html')
})
route.get('/signup', (req, res)=>{
    res.sendFile('/Users/muskan/Desktop/OOSE Project/public/project_signup.html')
})
route.post('/', (req,res)=>{
   
   db.checkuser(req.body.username, req.body.password)
   .then(() => {
    res.redirect('User_profile.html')
})
   .catch((err) => {
    res.send("Incorrect username or password!")
})
})
route.post('/signup', (req,res,next) =>{
   db.adduser(req.body.child, req.body.date, req.body.parent, req.body.contact, req.body.email, req.body.username, req.body.password)
   .then(() => {
    res.sendFile('/Users/muskan/Desktop/OOSE Project/public/project_main.html')
})
   .catch((err) => {
    reject(err)
})
})

exports=module.exports=route;