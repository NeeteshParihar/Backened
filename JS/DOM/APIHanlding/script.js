
document.addEventListener("DOMContentLoaded" , ()=>{

    let inputCity = document.getElementById ("city-input") ;
    let btn = document.getElementById("get-weather-btn")
    let weatherInfo = document.getElementById("weather-info") 
    let cityName = document.getElementById("city-name") 
    
    let temperature = document.getElementById("temperature") 
    
    let description = document.getElementById("description") 

    let errorMessage = document.getElementById("error-message") ; 

    let windSpeed = document.getElementById("wind") ;

    const API_KEY = `360774e6912498a86671130d6e20e7c4`

    btn.addEventListener("click", async()=>{

        const city = inputCity.value.trim() ;
        if(!city) return  ;

        //  server may throw some error 
        //  server is always on another when we reach 

        try{

            console.log("hello1")
            const wheaterData = await fetchWeatherData(city) ;
            console.log("hello2")
            displayWeatherData(wheaterData) ;


        }catch(error){

            console.log("hello3")
            showError() ;

        }  

        inputCity.value = "" ;


    }  )


    async function fetchWeatherData(city){

        let url =   `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=360774e6912498a86671130d6e20e7c4`

        const response = await fetch(url) ;
        console.log(response) ;
        console.log(typeof response) ;

        if( !response.ok){
            throw new Error("City not found")
        }

       const data = await response.json() ;
       console.log(data) ;
       console.log(typeof data ) ;
       return data ;

    }

    function displayWeatherData(weatherData){
        // display code 
        console.log(weatherData) ;    
        

        const {name , main , weather , wind } =  weatherData ;


        
        console.log(name ) ;
        console.table(main) ;
        console.table(weather) ;
        console.table(wind) ;

        cityName.textContent = name ;
        temperature.textContent =`temperature : ${ main.temp } °C`;
        description.textContent = `Weather: ${weather[0].description}`
        windSpeed.textContent = `wind : ${wind.speed} km/h , ${wind.deg} degree` ;

       


        weatherInfo.classList.remove("hidden") ;
        errorMessage.classList.add("hidden") ;
       
    }

    function showError(){

        weatherInfo.classList.add("hidden") ;
        errorMessage.classList.remove("hidden") ;

    }


})



