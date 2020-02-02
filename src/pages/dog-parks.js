import React, { useEffect, useState } from 'react';
import withLocation from '../components/withLocation';
import axios from 'axios';
import CardList from '../components/cardlist';
import { Link } from 'gatsby';


import { Container } from '../components/Container';


const DogParks = props => {
  const { location: zipcode } = props.search;
  const [dogParks, setDogParks] = useState([]);

  useEffect(() => {
    getDogParks();
  });

  const getDogParks = () => {
    axios
      .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=dog-park&location=${zipcode}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.YELP_TOKEN}`,
          },
        }
      )
      .then(res => {
        setDogParks(res.data.businesses);
      });
  };

  return (
    <Container>
      <Link to="/">Back</Link>
      <h2>Dog parks near {zipcode}</h2>
      <CardList businesses={dogParks} />
    </Container>
  );
};

export default withLocation(DogParks);
