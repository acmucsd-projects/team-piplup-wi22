import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import API from '../API'

export const UserEvents = () => {
    useEffect(() => {
        document.body.className = 'bodyUser';
        return () => { document.body.className = ''; }
      });
  
    const { id } = useParams();

    const [events, setUserEvents] = useState([]);

    useEffect( ()=> {
      const fetchData = async () => {
        const result =  await API.getUserEvents(id);
        console.log(result.data);
        setUserEvents(result.data.events);
      }
      fetchData();
    }, [])


    return (
    <div className = 'containerUser'>
        <div className = 'userEvents'>
            <div className = 'userEventsTitle'>Events Attending</div>
            {events.map((event) => (
              <a href={`../events/${event.id}`} >{event.title}</a>
              ))
            }
        </div>
        <div className = 'backToUser'>
            <a href= {`/user/${id}`}> Back to User</a>
        </div>
    </div>
  )
}


export default UserEvents