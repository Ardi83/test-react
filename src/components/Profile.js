import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../redux/actions/profile-actions'
import Loading from './Loading'

const Profile = ({ getProfile: { data, ad, loading } }) => {

  useEffect(() => {
    getProfile(2)
  }, [])
  
  if (loading) return <Loading />

  return (
    <div className="card m-2">
    <img src={data.avatar} className="card-img-top" alt={`${user.first_name}-image`} />
    <div className="card-body">
      <h6 className="card-title">{data.email}</h6>
      <p className="card-text">{data.first_name}</p>
      <a href="#" className="btn btn-primary">{data.last_name}</a>
    </div>
  </div>
  )
}

const mapStateToProps = state => ({
  profile: state.profileReducer
})

export default connect(mapStateToProps, { getProfile })(Profile)
