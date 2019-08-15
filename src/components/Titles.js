import React from 'react';
import './Titles.css';

export default class Titles extends React.Component {

  render() {
     return (
      <div className="Titles">
   	  	<h1 className="title-container__title">Weather Finder</h1>
	    	<h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
      </div>
    );
  }

}
