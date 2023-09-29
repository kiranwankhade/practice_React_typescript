import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

import masterclassTab from "../../Assets/masterclassTab.png";

import eventsTab from "../../Assets/eventsTab.png";
import EventCard from "./EventCard";

type Event = {
  _id: string;
  poster: string;
  name: string;
  tag: string;
  title: string;
  startTime: string;
  endTime: string;
  duration: string;
  noOfPeople: number;
  type: string;
  date: string;
  registrationStatus: string;
  time?: string; // Add the time property
  text?: string; // Add the text property
};

type EventCardProps = {
  date: string;
  id: string | number;
  status?: boolean;
  text: string;
  onclick: () => void;
  time: string;
  event: Event; 
};
const Events = () => {
  const [allBg, setAllBg] = useState("All");
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchEvents(token);
    }
  }, []);

  const fetchEvents = async (token: string) => {
    try {
      const response = await axios.get(
        "https://agreeable-calf-coat.cyclic.cloud/event",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data) {
        console.log("response.data:", response.data);
        setEvents(response.data.events);
        setData(response.data.events);
      }
    } catch (error) {
      console.error("Events Fetching Error:", error);
    }
  };

  const [data, setData] = useState(events);

  return (
    <Box
      w={"100%"}
      height={["100%", "none"]}
      m={"auto"}
      mb={"20"}
      overflowY={["auto", "visible"]}
    >
      <Box
        w={["100%"]}
        height={["100%", "none"]}
        m={"auto"}
        mb={"14"}
        overflowY={["auto", "visible"]}
      >
        {/* <Box
              background={"bg_3"}
              mt={"-13px"}
              mb={"25px"}
              ml={"-2"}
              p={"1"}
              h={"24px"}
              flexShrink={"0"}
            >
              <Marquee
                play={true}
                pauseOnHover={false}
                pauseOnClick={false}
                speed={50}
              >
                {Hired.map((student, _i) => (
                  <Box key={_i} fontSize={"micro"}>
                    {student}
                  </Box>
                ))}
              </Marquee>
            </Box> */}

        <Box
          w={"100%"}
          mt={1}
          borderRadius="8px"
          background="radial-gradient(112.5% 111.22% at 104.39% 0%, rgb(132, 186, 199) 0%, rgb(26, 159, 189) 100%)"
          boxShadow=" 0px 4px 6px -1px rgba(0, 0, 0, 0.10)"
          display="flex"
          justifyContent={{ base: "space-around", md: "space-between" }}
          alignItems="center"
        >
          <Text display={["none", "none", "block", "block"]}></Text>
          <Text
            color="#ffffff"
            textAlign="center"
            fontSize="1.60rem"
            fontWeight="700"
          >
            Events
          </Text>

          <Image
            src="https://dashboard.masaischool.com/img/activities-banner-icon.png"
            alt="pologon"
          />
        </Box>
        <br />
        <Box
          w={"80%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"15px"}
          p={2}
        >
          <Flex
            w={"80%"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"15px"}
            p={2}
          >
            <Box
              backgroundColor={"rgb(111, 205, 158)"}
              border={
                allBg !== "All"
                  ? "6px rgb(111, 205, 158)"
                  : "6px solid rgb(183, 230, 207)"
              }
              borderRadius={"100px"}
              h={"65px"}
              w={"65px"}
              p={"2"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              onClick={() => {
                setData(events);
                setAllBg("All");
              }}
              cursor={"pointer"}
            >
              <Text
                cursor={"pointer"}
                color={"#ffffff"}
                fontSize={"1rem"}
                fontWeight={700}
              >
                All
              </Text>
            </Box>

            <Box
              cursor={"pointer"}
              border={"solid"}
              borderColor={"orange"}
              borderRadius={"0.6rem"}
              onClick={() => {
                setData(
                  events.filter((e) => e.type.toLowerCase() === "masterclass")
                );
                setAllBg("masterclass");
              }}
              style={
                allBg === "masterclass"
                  ? { border: "1px solid orange" }
                  : { border: "1px solid transparent" }
              }
            >
              <Image
                draggable={false}
                h={"3rem"}
                src={masterclassTab}
                alt={"masterclass"}
              />
            </Box>

            <Box
              cursor={"pointer"}
              onClick={() => {
                setData(
                  events.filter((e) => e.type.toLowerCase().includes("webinar"))
                );
                setAllBg("events");
              }}
            >
              <Image
                draggable={false}
                // transform={1.2}
                style={
                  allBg === "events"
                    ? { height: "3.6rem" }
                    : { height: "3.4rem" }
                }
                src={eventsTab}
                alt="events"
              />
            </Box>
          </Flex>

          <Flex
            gap={"15px"}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              flex={9}
              mt={5}
              p={3}
              width={"100%"}
              display={"grid"}
              gridTemplateColumns={[
                "repeat(1,1fr)",
                "repeat(1,1fr)",
                "repeat(1,1fr)",
                "repeat(2,1fr)",
              ]}
              gap={"10px"}
            >
              {data &&
                data.map((event, index) => (
                  //   <EventComponent
                  //   key={event._id}
                  //   poster={event.poster}
                  //   tag={event.tag}
                  //   title={event.title}
                  //   startTime={event.startTime}
                  //   duration={event.duration}
                  //   endTime={event.endTime}
                  //   type={
                  //     event.type.toLowerCase().includes("webinar")
                  //       ? "people have already registered"
                  //       : "people have participated"
                  //   }
                  //   noOfPeople={event.noOfPeople}
                  //   date={event.date}
                  //   id={event._id}
                  // />
                  <Box
                    // key={event._id}
                    w={"100%"}
                    borderWidth="1px"
                    borderRadius="15px"
                    bgColor={"white"}
                    cursor={"pointer"}
                  >
                    <Text display={"none"}>
                      {event.date} {event.registrationStatus}
                    </Text>
                    <Flex
                      flexDirection={"column"}
                      justifyContent={"space-evenly"}
                      alignItems={"flex-start"}
                      textAlign={"justify"}
                      lineHeight={2}
                      gap={"5px"}
                    >
                      <Box>
                        <Image
                          borderTopLeftRadius={"15px"}
                          borderRightRadius={"15px"}
                          src={event.poster}
                          alt={event.name}
                        />
                      </Box>

                      <Text
                        bgColor={"#e8f3fe"}
                        textAlign={"justify"}
                        fontSize={"0.8rem"}
                        borderRadius={"2xl"}
                        ml={2}
                        color={"#5377e5"}
                        px={3}
                        fontWeight={"bold"}
                        letterSpacing={"wider"}
                      >
                        {event.tag}
                      </Text>

                      <Text
                        ml={3}
                        color={"#1d202d"}
                        textAlign={"justify"}
                        fontWeight={600}
                        fontSize={"1rem"}
                      >
                        {event.title}
                      </Text>

                      <Flex
                        w={"90%"}
                        m={"auto"}
                        fontSize={"sm"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                        gap={"15px"}
                        lineHeight={1}
                      >
                        <Text flex={1}>{event.startTime}</Text>
                        <Flex
                          flex={6}
                          flexDirection={"column"}
                          justifyContent={"space-evenly"}
                          alignItems={"center"}
                        >
                          <Text>{event.duration}</Text>
                          <Slider
                            aria-label="slider-ex-2"
                            colorScheme="pink"
                            value={0}
                          >
                            <SliderTrack bg={"rgb(255, 205, 30)"}>
                              <SliderFilledTrack bg={"rgb(255, 205, 30)"} />
                            </SliderTrack>
                            <SliderThumb
                              _focus={{
                                boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)", // Manually set blue focus shadow
                              }}
                            />
                          </Slider>
                          <Text>Duration</Text>
                        </Flex>

                        <Text textAlign={"right"} flex={1}>
                          {event.endTime}
                        </Text>
                      </Flex>
                      {/* <EventCard
                        date={event.date}
                        id={event._id}
                        registrationStatus={event.registrationStatus}
                        onclick={() => {
                        }}
                        time={event.time}
                        text={event.text}
                        event={event}
                      /> */}
                      <Flex
                        margin={"auto"}
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"1px"}
                        pb={1}
                        mt={"-1"}
                      >
                        <Box>
                          <Image src="https://dashboard.masaischool.com/fire-icon-free.png" />
                        </Box>
                        <Text> {event.noOfPeople} </Text>
                        <Text fontSize={"sm"}>{event.type}</Text>
                      </Flex>
                    </Flex>
                  </Box>
                ))}
            </Box>
          </Flex>
          <Box flex={1.5}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
