import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "6df46025a0c5d63466a910775c3feda3";

class App extends React.Component {
    //state keeps track of change in the app with user interaction. We need this to view the results of an event
    state = {
        //initial state of object, only changes when button is pressed.
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
        // city: undefined,
        // description: undefined,
        // temperature: undefined,
        // humidity: undefined,
        // sunrise: undefined,
        // sunset: undefined,
        // windSpeed: undefined,
        // windDirection: undefined,
        // error: undefined
        
    }
    //aurgument e  will be used to prevent full page reset by useing preventdefault method
    getWeather = async (e) =>{
        e.preventDefault(); 
        
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
//use the tic next to number one for the string
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        
        //`http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${API_KEY}`
        //convert response to JSON so any language can read it
        const data = await api_call.json();
        if(city && country){
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });}
        else{
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please Enter the Values"
            });
        }
        //now we go to weather component to display what we have captured
    }
    render(){
        return(
            <div>
                <Titles />
                {/* we are setting function in this component called getweather to the variable getweather so that it is accessible within the forms component */}
                <Form getWeather={this.getWeather}/>
                <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}    
                />
            </div>
        )
    }
}

export default App;