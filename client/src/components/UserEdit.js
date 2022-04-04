import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import API from '../API'
import NavigationBar from './NavigationBar'

export const UserEdit = () => {
    useEffect(() => {
        document.body.className = 'bodyUser';
        return () => { document.body.className = ''; }
      });
  
    const { id } = useParams();
    const [userData, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect( ()=> {
        const fetchData = async () => {
          const result =  await API.getUser(id);
          setUser(result.data.user)
        }
        fetchData();
      }, [])

    const updateUser = async (e) => {
        e.preventDefault();
        const payload = {
            update:{
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                classes: userData.classes,
                interests: userData.interests,
                password: userData.password,
                __v: userData.__v,
                _id: userData._id,
                facebookUrl: e.target.facebook.value,
                instagramUrl: e.target.instagram.value,
                discordUrl: e.target.discord.value,
                gradYear: e.target.gradyear.value,
            }
        }
        if(payload.update.facebookUrl === '' && payload.update.instagramUrl === '' && payload.update.discordUrl === '' && payload.update.gradYear === ''
            && (file === null || file === undefined)){
                navigate(`/user/${id}`);
        }
        else if(payload.update.facebookUrl === '' && payload.update.instagramUrl === '' && payload.update.discordUrl === '' && payload.update.gradYear === ''
            && file !== null && file !== undefined){
                const profilePicture = new FormData();
                profilePicture.append(
                    "image",
                    file,
                    file.name
                )
                console.log(file)
                const result = await API.updateUserProfile(id, profilePicture)
                if(result.status === 200){
                    navigate(`/user/${id}`)
                }
        }
        else{
            console.log(payload)
            const response = await API.updateUser(id, payload);
            if(response.status === 200){
                navigate(`/user/${id}`)
            }
        }
    };

    const [file, setFile] = useState(null);

    const uploadFile = (e) => {
        setFile(e.target.files[0]);
    }

    return (
    <>
        <NavigationBar/>
        <div className = 'containerUser'>
            <div className = 'userEdit'>
            <div className='userEditTitle'>Edit Your Account</div>
            <form className = 'add-form' onSubmit={updateUser}>
                <div className= 'form-control'>
                    <label>Instagram</label>
                    <input name = 'instagram' type='text' placeholder = 'JohnSmith123'/>
                </div>
                <div className= 'form-control'>
                    <label>Facebook</label>
                    <input name = 'facebook' type='text' placeholder = 'John Smith' />
                </div>
                <div className= 'form-control'>
                    <label>Discord</label>
                    <input name= 'discord' type='text' placeholder = 'JohnSmith#1234'/>
                </div>
                <div className= 'form-control'>
                    <label>Grad Year</label>
                    <input name= 'gradyear' type='text' placeholder = '2023'/>
                </div>
                <div className= 'form-control'>
                    <label>Profile Picture</label>
                    <input name = 'image' type = 'file' accept=".gif,.jpg,.jpeg,.png" onChange = {uploadFile}/>
                </div>
                <button type="submit" className = 'createbtn'>Save Changes</button>
            </form>
        </div>
        </div>
    </>

  )
}

export default UserEdit
