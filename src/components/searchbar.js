import React from 'react'

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