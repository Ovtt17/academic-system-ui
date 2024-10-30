import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventList from '../components/calendar/EventList';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const events = [
    {
      title: 'Sample Event',
      start: new Date(),
      end: new Date(),
    },
  ];

  return (
    <div className="flex pt-4 justify-center gap-3 h-5/6">
      <div className="p-2 w-4/6">
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
        />
      </div>
      <EventList />
    </div>
  );
}

export default Calendar;