import React, { useState, useEffect } from 'react'

export const UserEdit = () => {
    useEffect(() => {
        document.body.className = 'bodyUser';
        return () => { document.body.className = ''; }
      });
  

    return (
    <div className = 'containerUser'>
        <div className = 'userEdit'>
        <div className='userEditTitle'>Edit Your Account</div>
        <form className = 'add-form'>
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
                <label>LinkedIn</label>
                <input name = 'linkedin' required type='text' placeholder = 'John Smith'/>
            </div>
            <div className= 'form-control'>
                <label>Profile Picture</label>
                <input name = 'image' type = 'file'/>
            </div>
            <button type="submit" className = 'createbtn'>Save Changes</button>
        </form>
    </div>
    </div>

  )
}

export default UserEdit
