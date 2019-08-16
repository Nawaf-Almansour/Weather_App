import React from 'react';
import './Titles.css';
import Moment from 'react-moment';
import 'moment-timezone';
import * as moment from 'moment'



//moment-timezone

//const dateToFormat = new Date('2019-08-19T12:59-0500');

export default class Titles extends React.Component {

  render() {
     return (

      <div className="Titles">
   	  	<h1 className="title-container__title">Weather Finder</h1>
	    	<h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
           <div>
             <Moment format="MMMM Do YYYY, h:mm:ss a">{this.props.dateToFormat}</Moment>
          </div>
    </div>
    );
  }

}
