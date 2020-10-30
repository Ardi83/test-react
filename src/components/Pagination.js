import React from 'react'

const Pagination = ({ totalPages, currentPage }) => {
  let pages = []
  for (let i = 1; i <= totalPages ;i++) {
    pages.push(i)
  }

console.log(pages);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        {pages && pages.map((page, index) => (
          <li key={index} className="page-item"><a className="page-link" href="#">{page}</a></li>
        ))}
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  )
}

export default Pagination
