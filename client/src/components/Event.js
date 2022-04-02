import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const truncate = (str) => {
  return str.length > 250 ? str.substring(0, 200) + "..." : str;
}
const Event = ({data}) => {

  return (
    <div className='event'>
      <div className='eventWrapper'>
        <Card 
          bg={'dark'}
          text={'light'}
          classname= 'mb-0'
        >

          <Card.Body> 
            <Card.Title text={'danger'}>{data.title}</Card.Title>
            <Card.Subtitle style={{}}>{data.host}</Card.Subtitle>
            <Card.Text>
              <div class="card-body" style={{overflow:'hidden', textOverflow: 'ellipsis'}}>{truncate(data.description)}</div>
              <h4>{data.startdate} - {data.enddate} </h4>
            </Card.Text>
            <Link to={"/events/" + data.id} class="btn btn-primary">See details</Link>
            
          </Card.Body>
        </Card>

      </div>
    </div>
  )
}

export default Event