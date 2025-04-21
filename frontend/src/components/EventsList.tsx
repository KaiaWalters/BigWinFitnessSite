import React from 'react';
import { EventCardProps, CalendarEvent, EventListProps } from '../types/Events';

const EventCard = ({ event }: EventCardProps) => {
  const { date, title, description, location, type, image, headCount } = event;

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 shadow-md overflow-hidden">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 bg-white">
        <div className="text-sm text-gray-500 mb-2">
          <span className="font-bold text-gray-800">{new Date(date).toLocaleDateString()}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z"
            />
          </svg>
          {location}
        </div>
        <div className="mt-3 text-xs font-bold text-gray-700 bg-gray-100 inline-block px-2 py-1 rounded-full">
          {type}
        </div>
        <div className="mt-3 text-sm text-gray-500">
          <span className="font-semibold">Attendees:</span> {headCount}
        </div>
      </div>
    </div>
  );
};

const EventList = ({ events }: EventListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};


export default EventList;