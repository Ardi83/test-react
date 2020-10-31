import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../redux/actions/users-actions'
import Loading from './Loading'
import Pagination from './Pagination'

const Users = ({ getUsers, users: { total_pages }, data , loading }) => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    getUsers(page)
  }, [page])

  if (loading) return <Loading />
  const currentPage = page => {
    setPage(page)
  }

  return (
    <>
    <div className="d-flex flex-wrap">
      {data && data.map(user => (
        <div key={user.id} className="card m-2 col-md-3" style={{width: '18rem'}} >
          <Link to={`/profile/${user.id}`}>
            <img src={user.avatar} className="card-img-top" alt={`${user.first_name}-image`} />
            <div className="card-body">
              <h6 className="card-title">{user.email}</h6>
              <p className="card-text">{user.first_name}</p>
              <p className="cart-text">{user.last_name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
      <Pagination totalPages={total_pages} getCurrentPage={currentPage} />
    </>
  )
}

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  data: state.usersReducer.users.data,
  loading: state.usersReducer.loading
})

export default connect(mapStateToProps, { getUsers })(Users)
