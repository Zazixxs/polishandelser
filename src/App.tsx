import  {useEffect,useState} from 'react'
import './App.css'
import MediaCard from './components/Card';
import { Select } from '@mui/material';

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


const police_url = "https://polisen.se/api/events"

useEffect(() => {
  fetch(police_url)
    .then((response) => response.json())
    .then((data) => {
      setEvents(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);
  return (
    <>
      <Select>
      </Select>
      <div style={{display: 'flex', flexWrap:'wrap', gap: '1rem'}}>
        {events.map((event) => (
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

export default App
