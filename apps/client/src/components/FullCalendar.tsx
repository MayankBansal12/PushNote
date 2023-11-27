import React, { useEffect, useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput } from '@fullcalendar/core';
import { ITask } from "../types/types";

interface FullCalendarProps {
  tasks: ITask[];
}

type DeadlineType = {
  title: string,
  date: Date | undefined
}

export default function FullCalendar({ tasks }: FullCalendarProps) {
  const [deadline, setDeadline] = useState<DeadlineType[]>([]);

  useEffect(() => {
    const deadlines = tasks?.map((task: ITask) => ({
      title: task.name,
      date: task.deadline,
    }));
    setDeadline(deadlines);
  }, [tasks])

  return (
    <div className="mt-4">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        events={deadline}
      />
    </div>
  );
}