import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import API from '../API'

export const CreateEvent = () => {

    const navigate = useNavigate();
    const [host, setHost] = useState(null);

    async function getHost(){
        const response = await API.getUser(localStorage.getItem('user'));
        setHost(response.data.user);
    }

    const createEvent = async (e) => {
        e.preventDefault();
        const payload = {
            event: {
                title: e.target.title.value,
                description: e.target.description.value,
                startDate: e.target.startDate.value,
                endDate: e.target.endDate.value,
                location: e.target.location.value,
                host: host,
                facebookUrl: e.target.facebookUrl.value,
                instagramUrl: e.target.instagramUrl.value,
                discordUrl: e.target.discordUrl.value,
                
            }
        }
       const response = await API.createEvent(payload);
       if(response.status === 200){
           alert('Created successfully');
           navigate('/events');
       }
       else{
           alert('Failed to create event');
       }
    }

    return(
        <>
            <div className='createaccTitle'>Create Event</div>
            <form className = 'add-form' onSubmit = {createEvent}>
                <div className= 'form-control'>
                    <label>Title*</label>
                    <input name = 'title' required type='text' placeholder = 'Enter Title' onChange = {getHost}/>
                </div>
                <div className= 'form-control'>
                    <label>Description*</label>
                    <input name = 'description' required type='text' placeholder = 'Enter Description'/>
                </div>
                <div className= 'form-control'>
                    <label>Start Date*</label>
                    <input name = 'startDate' required type='datetime-local' placeholder = 'Enter Start Date'/>
                </div>
                <div className= 'form-control'>
                    <label>End Date*</label>
                    <input name = 'endDate' required type='datetime-local' placeholder = 'Enter End Date'/>
                </div>
                <div className= 'form-control'>
                    <label>Location*</label>
                    <input name = 'location' required type='text' placeholder = 'Enter Location'/>
                </div>
                <div className= 'form-control'>
                    <label>Facebook URL</label>
                    <input name = 'facebookUrl' placeholder = 'Enter Facebook URL'/>
                </div>
                <div className= 'form-control'>
                    <label>Discord URL</label>
                    <input name = 'discordUrl' placeholder = 'Enter Discord URL'/>
                </div>
                <div className= 'form-control'>
                    <label>Instagram URL</label>
                    <input name = 'instagramUrl' placeholder = 'Enter Instagram URL'/>
                </div>
                    <button name = 'button' type="submit" className = 'createbtn'>Create Event</button>
            </form>
            <div className = 'backtoLogin'>
                <div style={{marginBottom: "10px"}}>* Required Fields</div>
                <a href='/events'> Back to Events</a>
            </div> 
        </>
    )
}

export default CreateEvent;