import React from 'react';
import './search.css';
import Titles from './search_page/Titles';
import Form from './search_page/Form';
import Weather from './search_page/Weather';
import axios from 'axios';

const API_KEY = "25522e43a0611c1ca9b86a7346379978";

export default class search extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined,
    img:  undefined
  }

  getWeather = async (event) =>{
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country ) {
     this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon ,
      error: " "

    });
  }else{
    this.setState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: "Please enter the value"
  });
  }
  }

  componentDidMount() {
   axios.get(`https://api.unsplash.com/photos/random/?client_id=c4268fc7a9c8c92823adc3e91336ba33b2eb873fa71c3a79ca93a12fa0d53887`)
     .then(response => {
       this.setState({
   img: response.data.urls.regular
     });
     })
    .catch(error => {
      console.log(error)
    })

 }

  render() {
    return (
    <React.Fragment>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container"
                    style ={ { backgroundImage: "url("+this.state.img+")" } }>
                  <Titles />
                  </div>
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather} />
                    <Weather
                      temperature={this.state.temperature}
                      humidity={this.state.humidity}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      icon={this.state.icon}
                      error={this.state.error}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    );
  }

}
