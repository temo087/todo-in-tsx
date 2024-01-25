import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" /> */}



const Clock: React.FC = () => {
  const [weekday, setWeekday] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
      const now = new Date();

      const dayIndex = now.getDay();
      setWeekday(daysOfWeek[dayIndex] + "" +"28");

      const hours = now.getHours();
      const minutes = now.getMinutes();

      const formattedHours = hours < 10 ? '0' + hours : '' + hours;
      const formattedMinutes = minutes < 10 ? '0' + minutes : '' + minutes;
      const formattedPMAM = hours < 12 ? "AM" : "PM";

      setCurrentTime(`${formattedHours}  :${formattedMinutes}  ${formattedPMAM}`);
    };

    // Update the date and time initially
    updateDateTime();

    // Set up an interval to update the date and time every minute
    const intervalId = setInterval(updateDateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Sdiv>
      <Davita>{weekday}</Davita>
      <Temo>{currentTime}</Temo>
    </Sdiv>
  );
};

export default Clock;
const Sdiv = styled.div`
    width: 430px;
height: 202px;
flex-shrink: 0;
margin-top: -20px;
border-radius: 10px 10px 0px 0px;
background:url("foto.svg") lightgray 50% / cover no-repeat;
`
const Temo = styled.h1`
  color: white;
font-family: "Russo One";
font-style: normal;
font-weight: 400;
line-height: normal;
position: absolute;
font-size: 40px;
margin: 146px 0 0 228px ;
`
const Davita = styled.h1`
color: white;
font-family: "Russo One";
position: absolute;
margin: 70px 0 0 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
font-size: 24px;
margin: 120px 0 0 328px;
`
