import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

import Search from '../components/searchbar';

library.add(faSearchLocation);

class index extends Component {
    constructor(props) {
      super(props);
      this.state = {
        zipcodeQuery: null
      };
    }
  
    onFormSubmit = (zipcodeQuery) => {
      this.setState({
        zipcodeQuery: zipcodeQuery
      })
    }

    render() {
        return (
            <Search onFormSubmit = {this.onFormSubmit} />
        );
    }
}

export default index;