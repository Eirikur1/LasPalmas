import { useState, useEffect } from 'react';
import Map from './components/Map';
import type { Fountain } from './types/fountain';
import './App.css';

function App() {
  const [fountains, setFountains] = useState<Fountain[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Mock data - will fetch from backend later
    const mockFountains: Fountain[] = [
      {
        id: 1,
        name: 'Plaza Mayor Fountain',
        latitude: 28.1235,
        longitude: -15.4363,
        description: 'Fountain in the center of the plaza',
        isOperational: true
      },
      {
        id: 2,
        name: 'Santa Catalina Park Fountain',
        latitude: 28.1350,
        longitude: -15.4300,
        description: 'Next to the main park',
        isOperational: true
      },
      {
        id: 3,
        name: 'Alfredo Kraus Auditorium Fountain',
        latitude: 28.1320,
        longitude: -15.4250,
        description: 'At the auditorium entrance',
        isOperational: false
      }
    ];
    setFountains(mockFountains);
  }, []);

  return (
    <div className="app">
      <div className="search-container-floating">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Find a Refill Station"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="user-container-floating">
        <svg className="user-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <Map fountains={fountains} />
    </div>
  );
}

export default App;
