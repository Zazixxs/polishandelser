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
const [loading, setLoading] = useState(true);

const police_url = "https://polisen.se/api/events"

useEffect(() => {
  fetch(police_url)
    .then((response) => response.json())
    .then((data) => {
      setEvents(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
}, []);
  return (
    <>
      <Select>
      </Select>
      <div style={{display: 'flex', flexWrap:'wrap', gap: '1rem'}}>
        {events.map((event,index) => (
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
