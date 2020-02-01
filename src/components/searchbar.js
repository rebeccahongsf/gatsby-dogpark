import React, { Component } from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Form = styled.form`
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`

class searchbar extends Component {
  constructor() {
    super()
    this.state = {
      zipcodeQuery: "",
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange = e => {
    this.setState({
      zipcodeQuery: e.target.value,
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()

    this.props.onFormSubmit(this.state.zipcodeQuery)
  }

  render() {
    return (
      <>
        <input
          placeholder="Enter Zip Code"
          type="number"
          id="zipcode"
          name="zipcode"
          maxLength="5"
          value={this.state.searchLocationQuery}
          onChange={this.handleSearchChange}
          required
        />
        <Link to={`/dog-parks?location=${this.state.zipcodeQuery}`}>
          Search
          <FontAwesomeIcon icon="search-location" />
        </Link>
      </>
    )
  }
}

export default searchbar
