import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({countriesPerPage, totalCountries, nextPage}) => {
  
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i)
  }
   
  return (
    <div className={styles.container}>
      
      {totalCountries === 1 ? <div></div> : 
pageNumbers.map(number => <button className={styles.pageNumber} onClick={() => nextPage(number)}> {number} </button>)
     }
    
    </div>

  )
    }
export default Pagination

