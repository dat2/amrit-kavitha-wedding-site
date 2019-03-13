import React from 'react'
import './event.less'

const EventPage = () => (
  <div id="event">
    <div>
      <span className="event-title">Venue:</span> Markham Convention Centre
    </div>
    <div>
      <span className="event-title">Address:</span> 2901 Markham Rd, Toronto, ON
      M1X 0B6, Canada
    </div>
    <div>
      <span className="event-title">Breakfast:</span> 9am
    </div>
    <div>
      <span className="event-title">Lunch:</span> Noon
    </div>
    <iframe
      width="100%"
      height="450"
      frameBorder="0"
      style={{ border: '0' }}
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11514.0687903959!2d-79.2474937!3d43.824373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40f040e13144372d!2sMarkham+Convention+Centre!5e0!3m2!1sen!2sca!4v1543696930459"
      allowFullScreen
    />
  </div>
)

export default EventPage
