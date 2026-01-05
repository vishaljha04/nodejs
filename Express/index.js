import express from 'express';

const app = express();
const PORT = 3000;

app.get('/',(req ,res)=>{
    return res.send("<h1>HELLO FROM EXPRESS SERVER</h1>")
})

app.get('/about',(req ,res)=>{
    return res.send("Hello from about page"+"Hey!"+req.query.name)
});



app.listen(PORT,()=>{
    console.log('Server is running on PORT:',PORT);
})