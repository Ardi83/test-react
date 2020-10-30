import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../redux/actions/profile-actions'
import Loading from './Loading'
import { useParams } from 'react-router-dom'


const Profile = ({ getProfile, profile: { data, ad }, loading }) => {
  let { id } = useParams()
  useEffect(() => {
    getProfile(id)
  }, [])
  
  if (loading) return <Loading />
  
  return (
    <div className="card m-2" style={{ width: '25rem'}}>
    <img src={data.avatar} className="card-img-top" alt={`${data.first_name}-image`} />
    <div className="card-body">
      <h6 className="card-title">{data.email}</h6>
      <p className="card-text">{data.first_name}</p>
      <p className="card-text">{data.last_name}</p>
    </div>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">{ad.company}</li>
    <a href={ad.url} target="_blank" rel="noopener noreferrer" className="list-group-item card-link">{ad.url}</a>
    <li className="list-group-item card-subtitle">{ad.text}</li>
  </ul>
  </div>
  )
}

const mapStateToProps = state => ({
  profile: state.profileReducer.profile,
  loading: state.profileReducer.loading
})

export default connect(mapStateToProps, { getProfile })(Profile)
