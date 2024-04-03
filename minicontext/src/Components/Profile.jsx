import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div style={{
        color: 'blue',
        fontSize: '40px',
        backgroundColor: 'gray',
      }}>Please Login 🥹</div>

  return (
    <div>Welcome {user.username}</div>
  )
}

export default Profile