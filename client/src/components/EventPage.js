import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import NavigationBar from './NavigationBar'
import API from '../API'

export const EventPage = () => {

  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect( ()=> {
    const fetchData = async () => {
      const result =  await API.getEvent(id);
      console.log(result.data);
      setEvent(result.data);
    }
    fetchData();
  }, [])

  const userJoinEvent = async () => {
    const userID = localStorage.getItem('user');
    const response = await API.joinEvent(id,userID);
    if (response.status === 200){
      alert('Joined successfully');
      window.location.reload();
    }
  }


  //event.event
  if(event === null){
    return(
      <div/>
    )
  }

  else{
    return(
      <>
        <NavigationBar/>
        <div className = 'events'>{event.event.title}</div>
        <div className = 'eventDetails'> Description: {event.event.description} </div>
        <div className = 'eventDetails'> Start Date: {event.event.startDate} </div>
        <div className = 'eventDetails'> End Date: {event.event.endDate} </div>
        <div className = 'eventDetails'> Discord Url: {event.event.discordUrl} </div>
        <div className = 'eventDetails'> Facebook Url: {event.event.facebookUrl} </div>
        <div className = 'eventDetails'> Instagram Url: {event.event.instagramUrl} </div>
        <div className = 'eventDetails'> Users Attending: {event.event.attending.map((user) => (
          <a href = {`/user/${user._id}`}>{user.firstName}, </a>
        ))} </div>
        <div className = 'alignButton'>
          <button className = 'joinEventBtn' onClick={userJoinEvent}>Join Event</button>
        </div>
      </>
    )
  }
}
export default EventPage 
