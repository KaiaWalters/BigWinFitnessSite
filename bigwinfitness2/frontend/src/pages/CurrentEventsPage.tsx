import React, { useEffect } from "react"
import EventList from "../components/EventsList"
import { CalendarEvent } from "../types/Events"
import { useState } from "react"
import eventsService from '../services/EventsService'


const CurrentEventsPage = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([])

    useEffect(() => {
        const fetchEvents = async() => {
            try {

                const response = await eventsService.getAll() 

                console.log("response", response)

            }catch (error) {

                console.log('unable to retirve events', error)

            }
        }

        fetchEvents()
        // TODO: set redux store up and call dispatch 
    }, [])

    return (
        <>
          <h1>Events for the month of April</h1>
          <EventList events={[]}/>
        </>
    )
}

export default CurrentEventsPage