import React, { useEffect } from "react";
import { Button } from "@chakra-ui/button";
import { Box, Flex,Text } from "@chakra-ui/layout";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// Define the prop types for EventCard
type EventCardProps = {
    date: string;
    _id: string | number;
    status?: boolean;
    text: string;
    onclick: () => void;
    time: string;
    event: Event; 
};
  
const EventCard: React.FC<EventCardProps> = ({ date, _id, status, text, onclick, time,event}) => {
    console.log('eventCard:', event)

    const users = JSON.parse(localStorage.getItem('users') || '{}');

    const navigate = useNavigate();
    const currentDate = new Date();
    const inputDateString = date.toString();
    const dateParts = inputDateString.split(/[\/, :]/);
    const year = parseInt(dateParts[2]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[0]);
    const hour = dateParts[3].toLowerCase().includes("pm")
      ? parseInt(dateParts[4]) + 12
      : parseInt(dateParts[4]);
    const minute = parseInt(dateParts[5]);
    const second = parseInt(dateParts[6]);
    const parsedDate = new Date(year, month, day, hour, minute, second);
    const isoCurrentDate = currentDate.toISOString();
    const isoParsedDate = parsedDate.toISOString();
    const isUpcoming = isoCurrentDate < isoParsedDate;


    const registrationStatus = (_id === users._id)

    // useEffect(() => {
    //   getdispatch(getEventRegister(token));
    // }, []);
  
    const isRegistered = registrationStatus === users._id;
    let message = "";
  
    if (!isRegistered && isUpcoming) {
      message = "Click to register here";
    } else if (!isRegistered && !isUpcoming) {
      message = "Watch recording";
    } else if (isRegistered && isUpcoming) {
      message = "View details";
    } else if (isRegistered && !isUpcoming) {
      message = "Watch recording";
    }

    return (
        <>
        <Text>Hii</Text></>
    )
};

export default React.memo(EventCard);
