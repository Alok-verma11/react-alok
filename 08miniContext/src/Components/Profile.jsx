import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'    

function Profile() {
  const {user} = useContext(UserContext);
  
  if(!user){
    return <h2>Please login to view profile</h2>
  }
    return <div> Wellcome {user.username} </div>
}

export default Profile
