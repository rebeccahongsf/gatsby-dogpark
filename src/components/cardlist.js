import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 2rem 2rem;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  h3 {
    color: #212121;
  }
  p {
    color: #707070;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 8px 26px 0px;
    transition: all 0.3s ease 0s;
  }
`;

const Card = styled.div`
  padding: 2.4rem;
  background: #fff;
  height: 100%;
`;

const CardList = ({ businesses = [] }) => {
  return (
    <Grid>
      {businesses.map(business => {
        return (
          <Item>
            <Card key={business.id}>
              <div>Business Name: {business.name}</div>
              <div>Rating: {business.rating}</div>
            </Card>
          </Item>
        );
      })}
    </Grid>
  );
};

export default CardList;
