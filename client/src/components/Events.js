import React,{ useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom'

import API from '../API'


export const Events = () => {

  const [allEvents, updateEvents] = useState([]); 

  const navigate = useNavigate();

  useEffect( ()=> {
    const fetchData = async () => {
      const result =  await API.getEvents();
      updateEvents(result.data.event);
      console.log(result.data.event);
    }
    fetchData();
  }, [])

  return (
  <>
        <div className = 'events'>Events</div>
        <div className = 'createEvent'>
          <a class="btn btn-dark btn-sm" href = "/events/create" role="button" size="sm">Create Event</a>
        </div>
        <Row xs= {'auto'} md={'auto'} lg = {'auto'}>
        {allEvents.map((event) => (
        <>
          <Col>
            <Card border = "dark" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className = 'subtitle'>Description: {event.description}</Card.Subtitle>
                <div className = 'spacing'/>
                <Card.Subtitle>Date: {new Date(event.startDate).toLocaleString()} - {new Date(event.endDate).toLocaleString()}</Card.Subtitle>
                <div className = 'spacing'/>
                <Card.Subtitle>Location: {event.location}</Card.Subtitle>
                <div className = 'spacing'/>
                <a class="btn btn-primary" href= {`/events/${event._id}`}role="button">View Event</a>
              </Card.Body>
            </Card>
          </Col>
        </>
        ))}
        </Row>
  </>
  )
}


export default Events 
