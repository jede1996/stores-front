import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Agenda(){
  const [events, setEvents] = useState([
    { title: "Cita Veterinaria", date: "2025-11-10" },
    { title: "Control General", date: "2025-11-12" },
  ]);

  const handleDateClick = (info) => {
    alert(`Has hecho clic en la fecha: ${info.dateStr}`);
  };

  const handleEventClick = (info) => {
    alert(`Evento: ${info.event.title}`);
  };

    return (<>
     <div className="p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        selectable={true}
        editable={true}
        height="80vh"
      />
    </div>
    </>
    )
}