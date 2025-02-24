
// import the neccessary modules 
import express from "express";
import fs from "fs"
import path from "path"
import { buffer } from "stream/consumers";




const port = 5005;
const app = express();
const filePath = path.join(path.dirname(new URL(import.meta.url).pathname), "data.json");
app.use(express.json()); // This enables JSON parsing


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/`);
})


async function loadCars() {

    try {
        const bufferObj = fs.readFileSync(filePath);

        console.log(bufferObj);

        const jsonStr = bufferObj.toString();
        console.log(jsonStr);
        const obj = JSON.parse(jsonStr);
        console.log(obj);

        return obj;



    } catch {

        console.log("Error");
        return {
            cars: []
        }

    }


}

async function save(cars) {

    const JsonStr = JSON.stringify({cars , index})
    fs.writeFileSync(filePath, JsonStr);


}

let res = await loadCars() ;
let cars = res.cars ;
let index = res.index  ;



app.get("/" , (req , res)=>{
    res.status(202).send(`<h4>Hello root </h4>`)

})

app.get("/cars" , (req , res)=>{   
    res.status(202).send(cars) ;
})

app.post("/cars" , (req , res)=>{

    const {model , price} = req.body ;

    const newCar = {
        id : index++ ,
        model : model ,
        price : price 
    }

    cars.push(newCar) ;

    save(cars) ;

    res.status(201).send(newCar ) ;

})

// defining a particular route 
app.get("/cars/:id" , ( req , res )=>{

    // the values recieved from the route are strings
    const carID = parseInt(req.params.id );

    const car  = cars.find(  (car)=>car.id === carID) ;

    // when the value doesnt exist then the car will be undefined 
    if(!car){
        res.status(404).send("Content not found") ;
    }else{
        
        res.status(202).send(car) ;
    }

    
})

// define route and a callback which will we run when the request is send from the route
app.put("/cars/:id" , (req ,res)=>{

    const carId = parseInt(req.params.id) ;
    const {model , price} = req.body ;

    cars.forEach( (car)=>{
        if(car.id === carId){

            car.model = model ;
            car.price = price ;
            save(cars) ;
            return res.status(202).send(car) ;
        }
    })

    res.status(404).send("Car not found") ;


})


// define route and a callback which is going to exuted when the delete request is send at this route 
app.delete("/cars/:id" , (req , res)=>{

    const carId = parseInt(req.params.id)  ;

    let index = -1 ;

    cars.forEach((car , i)=>{
        if(car.id === carId){
            index = i ;            
        }
    })


    if(index === -1){
        res.status(404).send("Car Not Found") ;
    }else{

        const tobeDeleted = cars[index] ;
        cars = cars.slice( 0 , index).concat(index+1) ;
        save(cars) ;

        res.status(202).send(tobeDeleted) ;

    }

   

})



  app.put("/cars" , (req , res)=>{

    const obj = req.body ;
    index = obj.index ;
    cars = obj.cars ;

    save(cars) ;

    res.status(202).send({cars , index}) ;


  })