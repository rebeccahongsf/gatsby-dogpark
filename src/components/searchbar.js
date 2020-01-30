import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Form = styled.form`
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance:textfield;
    }
`;

class SearchBar extends Component {  
    constructor() {
        super();
        this.state = {
            zipcodeQuery: ""
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            zipcodeQuery: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.zipcodeQuery)
    }

    render(){
        return (
            <div>
                <Form onSubmit={(e) => this.handleFormSubmit(e)}>
                    <input 
                        placeholder="Enter Zip Code" 
                        type="number" 
                        id="zipcode"
                        name="zipcode" 
                        maxLength="5" 
                        value = {this.state.searchLocationQuery}
                        onChange = {this.handleSearchChange}
                        required 
                    />
                    <button type="submit" name="submit">
                        Search
                        <FontAwesomeIcon icon="search-location" />
                    </button>
                </Form>
            </div>
        )
    } 
}


export default SearchBar;