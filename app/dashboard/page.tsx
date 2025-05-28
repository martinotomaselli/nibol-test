'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CalendarWidget from '@/components/CalendarWidget';

type Status = 'ufficio' | 'remoto' | 'assenza' | '';

function useRedirectIfNotLogged() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, []);
}

export default function DashboardPage() {
  useRedirectIfNotLogged();

const [welcomeName, setWelcomeName] = useState('');
useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  setWelcomeName(user.name || '');
}, []);
  const [status, setStatus] = useState<Status>('');
  const [desk, setDesk] = useState('');
  const [report, setReport] = useState<Record<string, Status>>({});
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

 

  function handleStatusChange(newStatus: Status) {
    setStatus(newStatus);
  }

  const handleDeskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesk(e.target.value);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Hi {welcomeName} 👋</h2>
      <p className="text-sm text-gray-600 mb-4">See what you have to do today, your bookings and more.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* IN OFFICE */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="font-medium mb-2">In office</p>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md text-sm mb-2"
            placeholder="Insert desk..."
            value={desk}
            onChange={handleDeskChange}
          />
          <button
            onClick={() => handleStatusChange('ufficio')}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm font-semibold"
          >
            Select desk
          </button>
        </div>

        {/* REMOTELY */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="font-medium mb-2">Remotely</p>
          <button
            onClick={() => handleStatusChange('remoto')}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm font-semibold"
          >
            I work remotely
          </button>
        </div>

        {/* NOT AT WORK */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="font-medium mb-2">Not at work</p>
          <button
            onClick={() => handleStatusChange('assenza')}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm font-semibold"
          >
            Personal needs
          </button>
        </div>
      </div>

      {/* CALENDAR */}
      {status && (
        <div className="mt-6">
          <CalendarWidget status={status} report={report} onDateChange={handleDateChange} />
        </div>
      )}

      {/* REPORT */}
      {Object.keys(report).length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2">I tuoi appuntamenti</h3>
          <ul className="text-sm space-y-1">
            {Object.entries(report).map(([date, status]) => (
              <li key={date} className="flex justify-between border-b pb-1">
                <span>{new Date(date).toLocaleDateString('it-IT', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</span>
                <span className="capitalize font-semibold text-orange-600">{status}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
