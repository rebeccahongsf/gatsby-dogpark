import React from "react"

const CardList = ({ businesses = [] }) => {
  return (
    <div className="card" style={{ border: "solid 1px black" }}>
      {businesses.map(business => {
        return (
          <div
            key={business.id}
            style={{ margin: 12, padding: 24, border: "solid 1px black" }}
          >
            <div>Business Alias: {business.alias}</div>
            <div>Rating: {business.rating}</div>
          </div>
        )
      })}
    </div>
  )
}

export default CardList
