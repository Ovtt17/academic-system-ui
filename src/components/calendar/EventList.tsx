const events = [
  { id: 1, title: 'Event 1', date: '2023-10-01' },
  { id: 2, title: 'Event 2', date: '2023-10-02' },
];

const EventList = () => {
  return (
    <aside className="bg-card rounded-lg p-4 w-1/4">
      <h2 className="text-xl font-bold mb-4">Scheduled Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id} className="mb-2">
            <div className="font-semibold">{event.title}</div>
            <div className="text-sm text-gray-600">{event.date}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default EventList;