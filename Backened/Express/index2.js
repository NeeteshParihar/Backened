import express from "express" ;

const app = express() ;
const PORT = 5005 ;



// accepting the json format
app.use(express.json()) ;

let teaData = []  

let nextID = 1 ;

app.post('/teas' , (req , res )=>{

    console.log(req) ;
    const { name , price} = req.body ;

    console.log(name , price) ;

    const newTea = { 
        id : nextID++ , 
        name : name ,
        price : price 
    } ;

    teaData.push(newTea) ;
    res.status(201 ).send(newTea) ;


})


app.get( '/teas/:id' , (req , res)=>{
    // the parameter is string
    const id = parseInt(req.params.id );

    const tea = teaData.find( (t)=> t.id === id ) ;

    if(!tea){
        return res.status(404).send(`${tea} : not found  `) ;
    }else{

        return res.status(202).send(tea) ;

    }



})

// update the tea

app.put('/teas/:id' , (req , res)=>{    

    const teaId = parseInt(req.params.id) ;
    const {name , price}= req.body ;

    const oldTea = teaData.find(t=>t.id === teaId) ;

    if(!oldTea){
        return res.status(404).send("Tea not found") ;
    }else{
        oldTea.name = name ;
        oldTea.price = price 

        return res.status(202).send(oldTea    ) ;
    }

    


})

app.get("/teas" , (req , res)=>{

    res.status(202).send(teaData) ;

})


// delete an tea

app.delete("/teas/:id" , (req , res)=>{

    const teaID = parseInt(req.params.id );

    const index = teaData.findIndex(t=>t.id === teaID) ;
    .

    if(index === -1){
        return res.status(404).send("Tea not found") ;
    }

    const oldTea = teaData[index] ;

    teaData.splice(index, 1) ;

    return res.status(202).send(oldTea) ;



})



 app.listen(PORT , ()=>{
    console.log(`Express-server is listening at port : ${PORT}`) ;
})


app.get( "/" , (req , res)=>{

    res.send(`<h1> Hello World </h1>`) ;

})


