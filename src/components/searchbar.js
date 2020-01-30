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


const searchbar = () => {
    return (
        <div>
            <form>
                <input placeholder="Enter Zip Code" type="number" name="zipcode" maxLength="5" required />
                <button type="submit" name="submit">Search</button>
            </form>
        </div>
    )
}

export default searchbar;