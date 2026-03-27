"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Event } from "@/lib/events-data";
import { getDateOverlay } from "@/lib/events-data";

interface EventsCalendarProps {
  title?: string;
  eventsToShow: Event[];
  excludeSlug?: string;
}

export function EventsCalendar({ 
  title = "Events Calendar", 
  eventsToShow, 
  excludeSlug 
}: EventsCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Filter out excluded event if provided
  const filteredEvents = excludeSlug 
    ? eventsToShow.filter(event => event.slug !== excludeSlug)
    : eventsToShow;

  // Get calendar days for current month
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  // Generate calendar grid
  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayWeekday; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayEvents = getDateOverlay(date);
    calendarDays.push({ date, events: dayEvents });
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  if (filteredEvents.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
          {title}
        </h2>
        <p className="text-[#2C1810]/70">No events scheduled at this time.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
          {title}
        </h2>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-2xl border border-[#2C1810]/10 overflow-hidden shadow-sm">
        {/* Calendar Header */}
        <div className="flex items-center justify-between p-4 bg-[#F9F6F0] border-b border-[#2C1810]/10">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-2 text-[#2C1810] hover:text-[#3B5323] transition"
            aria-label="Previous month"
          >
            ←
          </button>
          <h3 className="font-serif text-lg font-semibold text-[#2C1810]">
            {monthNames[month]} {year}
          </h3>
          <button
            onClick={() => navigateMonth('next')}
            className="p-2 text-[#2C1810] hover:text-[#3B5323] transition"
            aria-label="Next month"
          >
            →
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-px bg-[#2C1810]/5">
          {/* Day headers */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="bg-[#F9F6F0] p-2 text-center text-xs font-medium text-[#2C1810]/70">
              {day}
            </div>
          ))}
          
          {/* Calendar days */}
          {calendarDays.map((dayData, index) => (
            <div key={index} className="bg-white min-h-[60px] p-1">
              {dayData && (
                <div className="h-full">
                  <div className="text-sm text-[#2C1810] mb-1">
                    {dayData.date.getDate()}
                  </div>
                  {dayData.events.length > 0 && (
                    <div className="space-y-1">
                      {dayData.events.slice(0, 2).map(event => (
                        <div
                          key={event.id}
                          className="text-xs bg-[#3B5323] text-white px-1 py-0.5 rounded truncate"
                          title={event.title}
                        >
                          {event.title}
                        </div>
                      ))}
                      {dayData.events.length > 2 && (
                        <div className="text-xs text-[#2C1810]/60">
                          +{dayData.events.length - 2} more
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Events List */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.slug}`}
            className="group block overflow-hidden rounded-2xl border border-[#2C1810]/10 bg-white transition hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={event.image}
                alt={event.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {event.repeats && (
                <div className="absolute right-3 top-3">
                  <span className="rounded-full bg-[#3B5323] px-2 py-1 text-xs font-medium text-white">
                    Repeats
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold text-[#2C1810] group-hover:text-[#3B5323]">
                {event.title}
              </h3>
              <p className="mt-2 font-medium text-[#C4A35A]">
                {event.date} · {event.time}
              </p>
              {event.description && (
                <p className="mt-3 text-sm text-[#2C1810]/80 line-clamp-2">
                  {event.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}