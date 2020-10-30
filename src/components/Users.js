import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../redux/actions/users-actions'
import Pagination from './Pagination'

const Users = ({ getUsers, users: { total_pages } }) => {

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div>
        {total_pages}
      </div>
      <Pagination totalPages={total_pages} currentPage={1} />
    </>
  )
}

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  loading: state.usersReducer.loading
})

export default connect(mapStateToProps, { getUsers })(Users)
