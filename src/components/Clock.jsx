import React from 'react'
import { useState, useEffect } from 'react';

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
    }, []);

    const refreshClock = () =>{
        setDate(new Date());
    }

    return (
      <span className='clock'>
        {date.toLocaleString('en-UK', {hour12: false,})}
      </span>
    )
}
