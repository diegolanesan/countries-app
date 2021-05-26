import React from 'react'

const Pagination = ({countriesPerPage, totalCountries, nextPage}) => {
  
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i)
  }
  
  return (
    <div>
      {pageNumbers.map(number => 
        <li key={number}>
          <button onClick={() => nextPage(number)}> {number} </button>
        </li>  
      )}
    </div>
  )
}

export default Pagination

