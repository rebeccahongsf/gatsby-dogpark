import React, { Component } from 'react';
import axios from 'axios';

class RestaurantList extends Component {

    constructor(props) {
        super(props);
        //props.state is linked with the result sending back from its child a.k.a the result we returned in SearchForm element
        this.state = {
        //leverage the state to store the information return from API to make loading faster
        results: [],
        errorState: null,
        loading: false,
        };
    }
    
    componentDidMount () {
        this.getParkFromApi('San Francisco');
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.props.zipcodeQuery !== prevProps.zipcodeQuery) {
            this.setState({
                results: [], 
            }, () => this.getParkFromApi(this.props.zipcodeQuery))
        }
    }
    //function to get information from API 
    getParkFromApi = (locationSearched) => {
        //UI feedback to tell the user when we are retrieving infromation from the API 
        this.setState({ loading: true })

        //using a proxy server cors-anywhere to get rid of the CROS probblem 
        //SUPER HOT TIP: passing the location variable, which equals to the user's input (see below). Instead of grabbbing the entire API, it will only retrieve the restaurants that are closed to the location information we entered. This makes the lodading wayyyyyyy faster.
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=dog-park&location=${locationSearched}`, {
        //required authorization format from API 
        headers: {
            //to get the API from the .env file use process.env.{variable name}
            Authorization: `Bearer ${process.env.YELP_TOKEN}`
        },
        })
        .then((res) => {
            console.log(res.data.businesses)
            //change the state of App to reflect on the result we are given from the API
            //at the same time, setting the loading state to false 
            this.setState({ results: res.data.businesses, loading: false })
        })
        .catch((err) => {
            //fire the errorState message if there is no information return from the API
            this.setState({ errorState: `Sorry we coudln't find a dog park related to the location you search, do you want to try something else?`, loading: false })
        })
    }

    renderEmptyState () {
        return (
            <h2 className = "heading-tertiary">`Hang tight! We are working on getting you the list of best dog parks in your neighbourhood! `</h2>
        )
    }

    renderCardList() {
        return (
            <div>
                Results Here
            </div>
        )
    }
}

export default cardlist;