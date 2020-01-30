// import React from 'react';
// import { Link, graphql, StaticQuery } from 'gatsby';

// const SEARCH_QUERY = graphql`
// query SearchList($zipcode: String!) {
//     search(term:"dog park",
//            location: $zipcode) {
//         business{
//             name
//             id
//             rating
//             url
//         }
//     }
// }`

// const cardlist = () => {
//     return (
//         <StaticQuery 
//             query={SEARCH_QUERY}
//             render={({search}) => (
//                 <h1>Dog Parks Nearby</h1>
//                 <div>
//                     {search.map(({business}) => (
//                         <h2>{ business.name }</h2>
//                     ))}
//                 </div>
//             )}
//         />
//     )
// }

// export default cardlist;