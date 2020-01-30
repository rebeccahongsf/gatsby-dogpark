import React from 'react';
import styled from 'styled-components';

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


class searchbar extends React.Component {
    state = {
        zipcode: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`Your zipcode is ${this.state.zipcode}!`)
    }

    render() {    
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="Enter Zip Code" 
                        type="number" 
                        name="zipcode" 
                        maxLength="5" 
                        value={this.state.zipcode}
                        onChange={this.handleInputChange}
                        required 
                    />
                    <button type="submit" name="submit">Search</button>
                </Form>
            </div>
        )
    }
}

export default searchbar;