export interface EventCardProps {
  event: CalendarEvent;
}

export interface CalendarEvent {
  date: string;
  title: string;
  description: string;
  location: string;
  type: string;
  image?: string; // Optional image field
  headCount: number; // New field for number of attendees
}

export interface EventListProps {
    events: CalendarEvent[];
  }