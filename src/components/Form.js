import React from 'react';
import './Form.css';

export default class Form extends React.Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
     return (
       <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City.." />
         <input type="text" name="country" placeholder="country.." />
         <button> Get Wteaher</button>
      </form>
    );
  }

}
