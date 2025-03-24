'use client'
import Image from "next/image";
import EventList from "./components/EventList"
import { useState, useEffect } from "react";
import {CalendarEvent} from './types/calendarEvents'
import {getAll} from './services'

export default function Home() {

  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([])
  const [display, setDisplay] = useState<CalendarEvent[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [greyOut, setGreyOut] = useState<boolean>(false)
  const eventsPerPage = 5 


  const fetch = async () => {
    try{
      const data = await getAll() 
      setAllEvents(data)
      const pages = Math.ceil(data.length / eventsPerPage)

      setTotalPages(pages)

      const end = page * eventsPerPage
      const start = end - eventsPerPage

      const events = data.splice(start, end)

      setDisplay(events)

    } catch(error: unknown) {
      if(error instanceof Error) {
        console.log("caught a new error", error.message)
      } else {
        console.log("An unknown error has occured", error)
      }
      setAllEvents([])
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  //client side pagination 
  const handleClick = (direction: string) => {
    while( 0 < page && page <= totalPages) {
      if(direction ===  "Next") {

        const end = page * eventsPerPage
        const start = end - eventsPerPage
  
        const events = allEvents.slice(start, end)
        if(events) {
          setDisplay(events)
          setPage(page + 1)
        }else {
          setGreyOut(!greyOut)
        }
  
      }else if(direction === "Prev") {
  
          const start = page * eventsPerPage
          const end = start - eventsPerPage
  
          const events = allEvents.slice(start, end)
  
          if(events) {
            setDisplay(events)
            setPage(page - 1)
          }else {
            setGreyOut(!greyOut)
          }
      }
    }
    setPage(1)
  } 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="p-6 bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-6">Upcoming Fitness Events</h1>
            <EventList events={display} />
            <div className="justify-between flex mt-6">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300" onClick={() => handleClick("Next")}>Previous</button> 
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300" onClick={() => handleClick("Prev")}>Next</button> 
              <span>Total Pages {totalPages}</span>
              <span>Current Page {page}</span>
            </div>
          </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
