'use client';

import { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCalendarAlt } from 'react-icons/fa';

const giorniSettimana = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
const mesiAnno = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

type Status = 'ufficio' | 'remoto' | 'assenza' | '';

interface CalendarWidgetProps {
  status: Status;
  report: Record<string, Status>;
  onDateChange: (date: Date) => void;
}

export default function CalendarWidget({ status, report, onDateChange }: CalendarWidgetProps) {
  const [value, setValue] = useState<Date>(new Date());

  const handleChange: CalendarProps['onChange'] = (val) => {
    const date = val as Date;
    setValue(date);

    const key = date.toISOString().split('T')[0]; // yyyy-mm-dd
    report[key] = status;
    onDateChange(date);
  };

  const formatted = value.toLocaleDateString('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="mt-4 animate-slideFade">
      <Calendar
        onChange={handleChange}
        value={value}
        className="bg-white rounded-lg shadow-md p-2 text-sm"
      />

      <div className="text-center mt-4 text-xs text-blue-700 flex items-center justify-center gap-1">
        <FaCalendarAlt />
        Hai selezionato: <span className="font-semibold">{formatted}</span>
      </div>
    </div>
  );
}
