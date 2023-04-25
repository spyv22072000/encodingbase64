const server = require('express');
const app = server();
function decodequerybase64(req,res,next){
console.log(req.query);
for(let q in req.query ){
    
let data = req.query[q];

data = new Buffer(data,"base64").toString("ascii");
req.query[q]=data;
}
console.log(req.query);
next();
}
app.use("/page",server.static(__dirname +"/public"))
app.get("/eval",decodequerybase64,(req,res)=>{
    const newdata = req.query.code;
     const result =eval(newdata);
    console.log(result);
    const final =[result];
    res.send(final);   
})

app.get("/",(req,res)=>{
    res.send("hello ");  
})
app.listen(5000,()=>{
    console.log("server started at port 5000");
    console.log(__dirname);
});

