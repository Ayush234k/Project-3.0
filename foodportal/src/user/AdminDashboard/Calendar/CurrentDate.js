import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
 const [dateTime, setDateTime] = useState(new Date());

 useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
 }, []);

 return (
    <div>
      <h1>Current Date and Time</h1>
      <p>{dateTime.toLocaleString()}</p>
    </div>
 );
};

export default CurrentDateTime;