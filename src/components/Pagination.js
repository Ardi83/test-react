import React, { useEffect, useState } from 'react'

const Pagination = ({ totalPages, getCurrentPage }) => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    getCurrentPage(page)
  }, [page])

  let pages = []
  for (let i = 1; i <= totalPages ;i++) {
    pages.push(i)
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item"><a aria-disabled={page === 1} className="page-link" onClick={() => setPage(page - 1)}>Previous</a></li>
        {pages && pages.map((page, index) => (
          <li key={index} className="page-item" onClick={() => setPage(page)}><a className="page-link" href="#">{page}</a></li>
        ))}
        <li className="page-item"><a aria-disabled={page === totalPages} className="page-link" onClick={() => setPage(page + 1)}>Next</a></li>
      </ul>
    </nav>
  )
}

export default Pagination
