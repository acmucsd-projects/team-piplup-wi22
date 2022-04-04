import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import API from '../API'

export const YourUser = () => {
    useEffect(() => {
        document.body.className = 'bodyUser';
        return () => { document.body.className = ''; }
      });

    const { id } = useParams();
    
    const [user, setUser] = useState(null);

    useEffect( ()=> {
      const fetchData = async () => {
        const result =  await API.getUser(id);
        setUser(result.data.user)
        console.log(result.data.user);
      }
      fetchData();
    }, [])


    const [edit, showEdit] = useState(null);

    useEffect( () => {
      if(id === localStorage.getItem('user')){
        showEdit([1]);
      }
    },[])

    if(edit === null){
      return(
        <>
            <div className = 'containerUser'>
                <div className = 'user'>
                  <img src={user?.pfp || "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"} alt = 'User Profile' className = 'userAvatar'></img>
                  <div class = 'userName'>{user?.firstName}</div>
                  <div class = 'userGrad'>Class of {user?.gradYear}</div>
                    <div className = 'userIGFB'>
                      <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"}
                        alt = 'Instagram' className = 'userSocialImages'></img>
                      <div className = 'userIGFBNames'>{user?.instagramUrl}</div>
                      <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"}
                        alt = 'Facebook' className = 'userSocialImages'></img>
                      <div className = 'userIGFBNames'>{user?.facebookUrl}</div>
                    </div>
                    <div className = 'userDCLI'>
                      <img src={"https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png"}
                        alt = 'Discord' className = 'userSocialImages'></img>
                      <div className = 'userDCLINames'>{user?.discordUrl}</div>
                    </div>
                  <div className = 'userEvents'>
                    <a href = {`/user/${id}/events`}>Events Attending</a>
                  </div>
                </div>
              </div>
          </>
      )
    }
    else{
      return (
        <>
          <div className = 'containerUser'>
              <div className = 'user'>
                <img src={user?.pfp || "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"} alt = 'User Profile' className = 'userAvatar'></img>
                <div class = 'userName'>{user?.firstName}</div>
                <div class = 'userGrad'>Class of {user?.gradYear}</div>
                  <div className = 'userIGFB'>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"}
                      alt = 'Instagram' className = 'userSocialImages'></img>
                    <div className = 'userIGFBNames'>{user?.instagramUrl}</div>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"}
                      alt = 'Facebook' className = 'userSocialImages'></img>
                    <div className = 'userIGFBNames'>{user?.facebookUrl}</div>
                  </div>
                  <div className = 'userDCLI'>
                    <img src={"https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png"}
                      alt = 'Discord' className = 'userSocialImages'></img>
                    <div className = 'userDCLINames'>{user?.discordUrl}</div>
                  </div>
                <div className = 'userEvents'>
                  <a href = {`/user/${id}/events`}>Events Attending</a>
                </div>
              </div>
              {/* Only render if id matches id on page */}
              {edit.map((show) => (
                <div className = 'editUser'>
                  <a href = {`/user/${id}/edit`}>Edit Profile</a>
                </div>
              ))}
          </div>
        </>
    )
    }
}

export default YourUser