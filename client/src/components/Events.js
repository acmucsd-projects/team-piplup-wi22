import React, { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar.js";
import Event from "./Event.js";

export const Events = (props) => {
  //const [events, setEvents] = useState([])
  const events = [
    {
      id: 1,
      title: "ACM Kickoff 2022",
      description:
        "Did someone say free boba and food???ACM at UCSD is UC San Diego's largest computer science organization, with over 1,500 members and over 200 technical, professional, and social events year-round. We’re not just computer science, though — we bring together anyone and everyone who shares our love of technology, design, and innovationJoin us to find out how you can engage in our online community for the Spring Quarter through game nights, live coding workshops, tech talks, and much more. We welcome people of all backgrounds and skill levels, whether you’re an entry-level UI designer or a machine learning expert. Come be a part of our rapidly growing community of friends at the last kickoff of the year! There will be free food and boba so make sure to come by!!!!See you all at Price Center West Ballroom!Join our discord to stay engaged with the community! acmurl.com/discord",
      startdate: "03/30/22",
      enddate: "03/30/22",
      host: "ACM",
      location: "Price Center Ballroom West",
    },

    {
      id: 2,
      title: "EVO 2022: Melee Singles",
      description: "Mango is goat",
      startdate: "03/31/22",
      enddate: "04/4/22",
      host: "EVO",
      location: "Justin's house",
    },
    {
      id: 3,
      title: "Sun God",
      description: "GET LIT!!!",
      startdate: "03/30/22",
      enddate: "03/30/22",
      host: "UCSD AS",
      location: "Price Center Ballroom West",
    },

    {
      id: 4,
      title: "CSE151B Lecture",
      description: "Deep learning Oohhh",
      startdate: "03/31/22",
      enddate: "04/4/22",
      host: "UCSD CSE",
      location: "Warren West",
    },
  ];

  return (
    <>
      <NavigationBar />

      <button> ADD EVENT </button>
      <div className="containerEvent">
        <div className="events">
          {events.map((event) => (
            <Event key={event.id} data={event} />
          ))}
        </div>

      </div>
    </>
  );
};

export default Events;
