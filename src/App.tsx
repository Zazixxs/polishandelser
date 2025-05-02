import React, { useEffect, useState } from 'react';
import './App.css';
import MediaCard from './components/Card';
import CustomSelect from './components/Select';

function App() {
  interface Event {
    id: string;
    type: string;
    summary: string;
    url: string;
    location: {
      name: string;
      gps?: string;
    };
  }

  const [events, setEvents] = useState<Event[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const police_url = 'https://polisen.se/api/events';

  useEffect(() => {
    fetch(police_url)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const locations = Array.from(new Set(events.map((event) => event.location.name)));
  const types = Array.from(new Set(events.map((event) => event.type)));

  const filteredEvents = events.filter(
    (event) =>
      (!selectedLocation || event.location.name === selectedLocation) &&
      (!selectedType || event.type === selectedType)
  );

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <CustomSelect
          label="Location"
          options={locations}
          value={selectedLocation}
          onChange={setSelectedLocation}
        />
        <CustomSelect
          label="Type"
          options={types}
          value={selectedType}
          onChange={setSelectedType}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredEvents.map((event) => (
          <MediaCard
            key={event.id}
            title={event.type}
            description={event.summary}
            image=""
            url={event.url}
            type={event.type}
            location={event.location.name}
          />
        ))}
      </div>
    </>
  );
}

export default App;